// ---
// Coded by: https://odd.rip
// Get it now: https://github.com/OddDevelopment/Simple-Adblock-Detector
// ---

const outbrainErrorCheck = async () => {
    try {
        const resp = await fetch("https://widgets.outbrain.com/outbrain.js");
        const text = await resp.text();

        return false;
    } catch (e) {
        return true;
    }
}

const adligatureErrorCheck = async () => {
    try {
        const resp = await fetch("https://adligature.com/", {
            mode: "no-cors"
        });
        const text = await resp.text();

        return false;
    } catch (e) {
        return true;
    }
}

const quantserveErrorCheck = async () => {
    try {
        const resp = await fetch("https://secure.quantserve.com/quant.js", {
            mode: "no-cors"
        });
        const text = await resp.text();

        return false;
    } catch (e) {
        return true;
    }
}

const adligatureCssErrorCheck = async () => {
    try {
        const resp = await fetch("https://cdn.adligature.com/work.ink/prod/rules.css", {
            mode: "no-cors"
        });
        const text = await resp.text();

        return false;
    } catch (e) {
        return true;
    }
}

const srvtrackErrorCheck = async () => {
    try {
        const resp = await fetch("https://srvtrck.com/assets/css/LineIcons.css", {
            mode: "no-cors"
        });
        const text = await resp.text();

        return false;
    } catch (e) {
        return true;
    }
}

const yieldkitCheck = async () => {
    try {
        const resp = await fetch("https://js.srvtrck.com/v1/js?api_key=40710abb89ad9e06874a667b2bc7dee7&site_id=1f10f78243674fcdba586e526cb8ef08", {
            mode: "no-cors"
        });
        const text = await resp.text();

        return false;
    } catch (e) {
        return true;
    }
}

const setIntervalCheck = () => {
    return new Promise((resolve) => {
        const timeout = setTimeout(() => {
            resolve(true);
        }, 2000);

        const interval = setInterval(() => {
            const a0b = "a0b";
            if (a0b == "a0b") {
                clearInterval(interval);
                clearTimeout(timeout);
                resolve(false);
            }
        }, 100);
    });
}

const idCheck = async () => {
    const bannerIds = ['AdHeader', 'AdContainer', 'AD_Top', 'homead', 'ad-lead'];
    const bannerString = bannerIds.map((bannerId) => `<div id="${bannerId}">&nbsp;</div>`).join('');
    const dataContainer = document.createElement("div");

    dataContainer.innerHTML = bannerString;
    document.body.append(dataContainer);

    let adblocker = false;
    bannerIds.forEach(id => {
        const elem = document.getElementById(id);

        if (!elem || elem.offsetHeight == 0) {
            adblocker = true;
        }

        elem?.remove();
    })

    return adblocker;
}

const detectedAdblock = async () => {
    const resp = await Promise.all([
        outbrainErrorCheck(),
        adligatureErrorCheck(),
        quantserveErrorCheck(),
        adligatureCssErrorCheck(),
        srvtrackErrorCheck(),
        setIntervalCheck(),
        yieldkitCheck()
    ]);

    const isNotUsingAdblocker = resp.every(r => r == false);

    return !isNotUsingAdblocker;
};

detectedAdblock().then(result => {
    const lastClosedTimestamp = localStorage.getItem('adblockLastClosed');
    const currentTimestamp = new Date().getTime();
    const shouldShowAdblockPopup = !lastClosedTimestamp || (currentTimestamp - lastClosedTimestamp) > 48 * 60 * 60 * 1000;

    if (result && shouldShowAdblockPopup) {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        overlay.style.backdropFilter = 'blur(10px)';
        overlay.style.zIndex = '10000';
        overlay.style.display = 'flex';
        overlay.style.flexDirection = 'column';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.color = '#fff';
        overlay.style.textAlign = 'center';

        const message = document.createElement('div');
        message.style.marginBottom = '20px';
        message.innerHTML = '<h2>We rely on ads to keep our site running</h2><p>Ads help us fund domains, so that we can get you more links. You can continue without turning it off.</p>';

        const button = document.createElement('button');
        button.textContent = 'Close';
        button.style.padding = '10px 20px';
        button.style.fontSize = '16px';
        button.style.cursor = 'pointer';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.backgroundColor = '#007BFF';
        button.style.color = '#fff';
        button.addEventListener('click', () => {
            localStorage.setItem('adblockLastClosed', currentTimestamp.toString());
            overlay.remove();
        });

        overlay.appendChild(message);
        overlay.appendChild(button);

        document.body.appendChild(overlay);
    }
});

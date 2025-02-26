document.addEventListener("DOMContentLoaded", function () {
    const cloaks = {
        "default": { title: "Genesis", favicon: "default.ico" },
        "google": { title: "Google", favicon: "https://www.google.com/favicon.ico" },
        "schoology": { title: "Schoology", favicon: "https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico" },
        "infinite-campus-1": { title: "Infinite Campus", favicon: "https://www.infinitecampus.com/favicon.ico" },
        "infinite-campus-2": { title: "Campus Student", favicon: "https://wicloud2.infinitecampus.org/campus/favicon-48x48.png" },
        "youtube": { title: "YouTube", favicon: "https://www.youtube.com/favicon.ico" },
        "google-slides": { title: "Google Slides", favicon: "https://ssl.gstatic.com/docs/presentations/images/favicon5.ico" },
        "google-docs": { title: "Google Docs", favicon: "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico" },
        "google-drive": { title: "Google Drive", favicon: "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png" },
        "gmail": { title: "Gmail", favicon: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" },
        "google-calendar": { title: "Google Calendar", favicon: "https://calendar.google.com/googlecalendar/images/favicons_2020q4/calendar_25.ico" },
        "google-photos": { title: "Google Photos", favicon: "https://www.gstatic.com/images/branding/product/2x/photos_64dp.png" },
        "google-keep": { title: "Google Keep", favicon: "https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png" }
    };

    function applyCloak(cloak) {
        if (cloaks[cloak]) {
            document.title = cloaks[cloak].title;

            // Update favicon
            let link = document.querySelector("link[rel~='icon']");
            if (!link) {
                link = document.createElement("link");
                link.rel = "icon";
                document.head.appendChild(link);
            }
            link.href = cloaks[cloak].favicon;
        }
    }

    // Load the saved selection and apply it
    const savedCloak = localStorage.getItem("selectedCloak");
    if (savedCloak) {
        applyCloak(savedCloak);
    }
});

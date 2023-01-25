const menuItems = document.querySelectorAll(".menu-item");
const notificationPopup = document.querySelector(".notification-popup");
// messages
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearchBox = document.querySelector("#message-search");
// Theme
const themeButton = document.querySelector("#theme-settings");
const themeModal = document.querySelector(".theme-container");
// font size settings
const fontSizeButton = document.querySelectorAll(".choose-size span");
let root = document.querySelector(":root");
//  Color settings
const colorButton = document.querySelectorAll(".choose-color span");
const bgcolorButton = document.querySelectorAll(".choose-background span");
const bgcolorButtonOne = document.querySelector(".choose-background .background-1");
const bgcolorButtonTwo = document.querySelector(".choose-background .background-2");
const bgcolorButtonThree = document.querySelector(".choose-background .background-3");


// ========= Removing the active class
const removeActive = () => {
    menuItems.forEach(item => {
        item.classList.remove("active");
    })
}

// ====== Display notificationPopup if menu id equals notification
const revealNotification = (item) => {
    if (item.id === ("notifications")) {
        notificationPopup.style.display = 'block';
        notificationPopup.style.zIndex = 10;
        document.querySelector(".notifications-count").style.display = "none";
    }
    else {
        notificationPopup.style.display = 'none';
    }
}

// ========================= Messages ==============================
const revealMessages = (item) => {
    if (item.id === ("messages-notification")) {
        document.querySelector(".messages-count").style.display = "none";
        messages.style.boxShadow = "0 0 1.5rem var(--color-primary)";
        setTimeout(() => {
            messages.style.transition = "all 200ms ease-in-out";
        }, 2000);
    }
    else {
        // messages.style.boxShadow = "var(--box-shadow-color)";
    }
}
// ================== Message search filtering =============
const messagesSearch = () => {
    const val = messageSearchBox.value.toLowerCase();

    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1 || val === "") {
            chat.style.display = "flex"
        }
        else {
            chat.style.display = "none"
        }
    })

}
// ================== The theme settings ========================
const activateThemeSettings = () => {
    themeModal.style.display = "grid";
}
const closeThemeSettings = (e) => {
    if (e.target.classList.contains("theme-container")) {
        themeModal.style.display = "none";
    }
}
// =================== font size =================
const removeActiveSize = () => {
    fontSizeButton.forEach(item => {
        item.classList.remove("active");
    })
}
// ======================== Toggling the active menu item
// ========= Adding the active class
menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        removeActive()
        item.classList.add("active");
        // ====== Display notificationPopup if menu id equals notification
        revealNotification(item);
        revealMessages(item);
    })
})


// search chat
messageSearchBox.addEventListener("keyup", messagesSearch);

// Theme settings
themeButton.addEventListener("click", activateThemeSettings);
themeModal.addEventListener("click", closeThemeSettings);

// ===================== font size settings =================
fontSizeButton.forEach((size) => {
    let fontSize;
    size.addEventListener("click", () => {
        removeActiveSize();
        size.classList.toggle("active")
        if (size.classList.contains("font-size-1")) {
            fontSize = "10px";
        } else if (size.classList.contains("font-size-2")) {
            fontSize = "12px";
        } else if (size.classList.contains("font-size-3")) {
            fontSize = "16px";
        } else if (size.classList.contains("font-size-4")) {
            fontSize = "18px";
        } else if (size.classList.contains("font-size-5")) {
            fontSize = "20px";
        }
        // change the document root font size
        document.querySelector("html").style.fontSize = fontSize;
    })
})





// ==================== color settings ====================
// Remove active class
const removeActiveColor = () => {
    colorButton.forEach(color => {
        color.classList.remove("active")
    })

}

colorButton.forEach(color => {
    color.addEventListener("click", () => {
        removeActiveColor(color)
        color.classList.toggle("active");
        if (color.classList.contains("color-1")) {
            primaryHue = 252;
        } else if (color.classList.contains("color-2")) {
            primaryHue = 52;
        } else if (color.classList.contains("color-3")) {
            primaryHue = 352;
        } else if (color.classList.contains("color-4")) {
            primaryHue = 152;
        } else if (color.classList.contains("color-5")) {
            primaryHue = 230;
        }
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


// ==================== BACKGROUND COLOR SETTINGS
// Remove active class
const removeActivebgColor = () => {
    bgcolor.forEach(color => {
        color.classList.remove("active")
    })

}
// theme background color
let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

// change background color
const changeBgColor = () => {
    root.style.setProperty("--light-color-lightness", lightColorLightness)
    root.style.setProperty("--dark-color-lightness", darkColorLightness)
    root.style.setProperty("--white-color-lightness", whiteColorLightness)
}


bgcolorButtonOne.addEventListener("click", () => {
    darkColorLightness = "17%";
    whiteColorLightness = "100%";
    lightColorLightness = "95%";

    // remove active class
    bgcolorButton[1].classList.remove("active");
    bgcolorButton[2].classList.remove("active");
    // add active class
    bgcolorButton[0].classList.add("active");
    // reload the page
    window.location.reload();
})


bgcolorButtonTwo.addEventListener("click", () => {
    darkColorLightness = "95%";
    whiteColorLightness = "20%";
    lightColorLightness = "15%";

    // remove active class
    bgcolorButton[0].classList.remove("active");
    bgcolorButton[2].classList.remove("active");
    // add active class
    bgcolorButton[1].classList.add("active");
    changeBgColor()


})

bgcolorButtonThree.addEventListener("click", () => {
    darkColorLightness = "95%";
    whiteColorLightness = "10%";
    lightColorLightness = "0%";

    // remove active class
    bgcolorButton[0].classList.remove("active");
    bgcolorButton[1].classList.remove("active");
    // add active class
    bgcolorButton[2].classList.add("active");
    changeBgColor()

})
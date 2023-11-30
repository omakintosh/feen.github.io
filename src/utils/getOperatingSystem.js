function getOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Проверка для iOS
    if (/ios|iphone|ipad|ipod/i.test(userAgent)) {
        return "iOS";
    }

    // Проверка для macOS
    if (/macintosh|mac os x/i.test(userAgent)) {
        return "MacOS";
    }

    // Проверка для Windows
    if (/Windows/i.test(userAgent)) {
        return "Windows Phone";
    }

    // Проверка для Android
    if (/android/i.test(userAgent)) {
        return "Android";
    }

    return "Неизвестная ОС";
}

console.log("Операционная система: " + getOperatingSystem());

export default getOperatingSystem;
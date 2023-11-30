function copyToClipboardiOS(text) {
    const textarea = document.createElement('textarea')
    textarea.value = text
    document.body.appendChild(textarea)
    textarea.select()

    try {
        document.execCommand('copy')
        alert('Ключ скопирован')
    } catch (err) {
        return
    }

    document.body.removeChild(textarea)
    return true
}

export default copyToClipboardiOS
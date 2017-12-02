export default {
    msToHMS(ms) {
        var seconds = ms / 1000
        var hours = parseInt(seconds / 3600)
        seconds = seconds % 3600
        var minutes = parseInt(seconds / 60)
        seconds = seconds % 60
        var result = ""
        if (hours > 0)
            result = result + hours + " h "
        if (minutes > 0)
            result = result + minutes + " m "

        result = result + seconds + " s"
        return result
    }
}
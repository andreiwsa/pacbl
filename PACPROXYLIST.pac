function FindProxyForURL(url, host) {
    // Исключить локальные и внутренние адреса
    if (isPlainHostName(host) || 
        isInNet(host, "127.0.0.0", "255.0.0.0") ||
        isInNet(host, "192.168.0.0", "255.255.0.0") ||
        isInNet(host, "10.0.0.0", "255.0.0.0")) {
        return "DIRECT";
    }
    //  — через 127.0.0.1:2080
        if (
		dnsDomainIs(host, ".greasyfork.org") ||
		dnsDomainIs(host, ".dailymotion.com") ||
		dnsDomainIs(host, ".discord.com") ||
		dnsDomainIs(host, ".envato.com") ||
		dnsDomainIs(host, ".facebook.com") ||
		dnsDomainIs(host, ".instagram.com") ||
		dnsDomainIs(host, ".linkedin.com") ||
		dnsDomainIs(host, ".metacritic.com") ||
		dnsDomainIs(host, ".patreon.com") ||
		dnsDomainIs(host, ".signal.org") ||
		dnsDomainIs(host, ".soundcloud.com") ||
		dnsDomainIs(host, ".x.com") ||
		dnsDomainIs(host, ".spotify.com") ||
		dnsDomainIs(host, ".tiktok.com") ||
		dnsDomainIs(host, ".threads.com") ||
		dnsDomainIs(host, ".openai.com") ||
		dnsDomainIs(host, ".airbnb.com") ||
		dnsDomainIs(host, ".wix.com") ||
		dnsDomainIs(host, ".cfapi.net") ||
		dnsDomainIs(host, ".smods.ru") ||
		dnsDomainIs(host, ".rutracker.org") ||
        dnsDomainIs(host, "googlevideo.com") ||
		dnsDomainIs(host, ".reddit.com") ||
		dnsDomainIs(host, "youtu.be") ||
		dnsDomainIs(host, "youtube.com") ||
		dnsDomainIs(host, ".redgifs.com") ||
		dnsDomainIs(host, ".redgifs.org") ||
		dnsDomainIs(host, ".redgifs.net") ||
		dnsDomainIs(host, ".redgifs.tv") ||
		dnsDomainIs(host, ".redgifs.co") ||
		dnsDomainIs(host, "redgifs.co") ||
		dnsDomainIs(host, "www.redgifs.com") ||
		dnsDomainIs(host, "doramatv.live") ||
		dnsDomainIs(host, "rt.pornhub.com") ||
		dnsDomainIs(host, "pornhub.com") ||
		dnsDomainIs(host, "ficbook.net") ||
		dnsDomainIs(host, "1fichier.com") ||
		dnsDomainIs(host, "1.doramatv.one") ||
		dnsDomainIs(host, "www.youtube.com") ||
		dnsDomainIs(host, "yt.be") ||
		dnsDomainIs(host, "ytimg.com") ||
		dnsDomainIs(host, "ggpht.com") ||
		dnsDomainIs(host, "gvt1.com") ||
		dnsDomainIs(host, "youtube-nocookie.com") ||
		dnsDomainIs(host, "youtube-ui.l.google.com") ||
		dnsDomainIs(host, "youtubeembeddedplayer.googleapis.com") ||
		dnsDomainIs(host, "youtube.googleapis.com") ||
		dnsDomainIs(host, "youtubei.googleapis.com") ||
		dnsDomainIs(host, "yt-video-upload.l.google.com") ||
		dnsDomainIs(host, "wide-youtube.l.google.com") ||
		dnsDomainIs(host, "yt4.ggpht.com") ||
		dnsDomainIs(host, "ytimg.l.google.com") ||
		dnsDomainIs(host, "nhacmp3.youtube.com") ||
		dnsDomainIs(host, "googleusercontent.com") ||
		dnsDomainIs(host, "googleapis.com") ||
		dnsDomainIs(host, "gstatic.com") ||
		dnsDomainIs(host, "www.gstatic.com") ||
		dnsDomainIs(host, "manifest.googlevideo.com") ||
		dnsDomainIs(host, "fonts.googleapis.com") ||
		dnsDomainIs(host, "i.ytimg.com") ||
		dnsDomainIs(host, "yt3.ggpht.com") ||
		dnsDomainIs(host, "static.doubleclick.net") ||
		dnsDomainIs(host, "jnn-pa.googleapis.com") ||
		dnsDomainIs(host, "rr11---sn-axq7sn7z.googlevideo.com") ||
		dnsDomainIs(host, "play.google.com") ||
		dnsDomainIs(host, "googleads.g.doubleclick.net") ||
		dnsDomainIs(host, "g.doubleclick.net") ||
		dnsDomainIs(host, "doubleclick.net") ||
		dnsDomainIs(host, "signaler-pa.youtube.com") ||
		dnsDomainIs(host, "discord.com") ||
		dnsDomainIs(host, "17.doramalive.news") ||
		dnsDomainIs(host, "16.doramalive.news") ||
		dnsDomainIs(host, "15.doramalive.news") ||
		dnsDomainIs(host, "doramalive.news") ||
		dnsDomainIs(host, "doramalive.live") ||
		dnsDomainIs(host, "hd-rezka.one") ||
		dnsDomainIs(host, "forums.spacebattles.com") ||
		dnsDomainIs(host, "hd3.lordserial7-9.xyz") ||
		dnsDomainIs(host, "seasonvar.ru") ||
		dnsDomainIs(host, "civitai.com") ||
		dnsDomainIs(host, "archiveofourown.org") ||
		dnsDomainIs(host, "rutor.info") ||
		dnsDomainIs(host, "flibusta.site") ||
		dnsDomainIs(host, "4pda.to") 
    ) {
        return "PROXY 127.0.0.1:2080";
    }

    // Всё остальное — напрямую
    return "DIRECT";
}

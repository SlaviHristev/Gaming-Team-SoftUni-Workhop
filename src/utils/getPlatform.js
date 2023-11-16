function getPlatformOptions(selectedPlatform){
    const platforms = [
        "PC",
        "Nintendo",
        "PS4",
        "PS5",
        "XBOX",
    ];

    const options = platforms.map((platform,index) => ({
        platform: `${index + 1} - ${platform}`,
        value: index + 1,
        selected: Number(selectedPlatform) === index + 1,
    }))
    return options;
}

module.exports = getPlatformOptions;
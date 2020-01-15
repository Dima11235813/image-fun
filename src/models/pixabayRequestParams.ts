export interface PixabayRequestParams {
    key: string | undefined;
    //      (required)	str	Your API key: 1060986-a3789b341db3a5e6b6d44e23a
    q: string | undefined;
    // str	A URL encoded search term. If omitted, all images are returned. This value may not exceed 100 characters.
    // Example: "yellow+flower"
    lang: string | undefined;
    // 	str	Language code of the language to be searched in.
    // Accepted values: cs, da, de, en, es, fr, id, it, hu, nl, no, pl, pt, ro, sk, fi, sv, tr, vi, th, bg, ru, el, ja, ko, zh
    // Default: "en"
    id: string | undefined;
    // str	Retrieve individual images by ID.
    // image_type	str	Filter results by image type.
    // Accepted values: "all", "photo", "illustration", "vector"
    // Default: "all"
    orientation: string | undefined;
    // 	str	Whether an image is wider than it is tall, or taller than it is wide.
    // Accepted values: "all", "horizontal", "vertical"
    // Default: "all"
    category: string | undefined;
    // 	str	Filter results by category.
    // Accepted values: fashion, nature, backgrounds, science, education, people, feelings, religion, health, places, animals, industry, food, computer, sports, transportation, travel, buildings, business, music
    min_width: string | undefined;
    // 	int	Minimum image width.
    // Default: "0"
    min_height: string | undefined;
    // int	Minimum image height.
    // Default: "0"
    colors: string | undefined;
    // 	str	Filter images by color properties. A comma separated list of values may be used to select multiple properties.
    // Accepted values: "grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown"
    editors_choice: string | undefined;
    // 	bool	Select images that have received an Editor's Choice award.
    // Accepted values: "true", "false"
    // Default: "false"
    safesearch: string | undefined;
    // 	bool	A flag indicating that only images suitable for all ages should be returned.
    // Accepted values: "true", "false"
    // Default: "false"
    order: string | undefined;
    // 	str	How the results should be ordered.
    // Accepted values: "popular", "latest"
    // Default: "popular"
    page: string | undefined;
    // int	Returned search results are paginated. Use this parameter to select the page number.
    // Default: 1
    per_page: string | undefined;
    // int	Determine the number of results per page.
    // Accepted values: 3 - 200
    // Default: 20
    callback: string | undefined;
    //string	JSONP callback function name
    // pretty	bool	Indent JSON output.This option should not be used in production.
    // Accepted values: "true", "false"
    // Default: "false"
}
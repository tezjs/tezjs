const shortText = require('../sanitizers/short-text.sanitizer');
module.exports = {
    "blog-list": ["Title", "Category", "PublishedDate", "Image", "NavURL", "BlogTags", ["LongText", shortText]],
    "blog-detail": ["Title", "LongText", "BlogAuthor", "Category", "PublishedDate", "Image", "NavURL", "BlogTags", "RelatedBlogs"],
    "blog-categories": ["Title", "NavURL"],
    "blog-tags": ["Title", "NavURL"],
    "blog-featured": ["Featured", "Title", "Category", "PublishedDate", "Image", "NavURL", "BlogTags", ["LongText", shortText]],
    "portfolio-service-list": ["Title", "Content", "NavURL", "Image"]
};
const { slugify } = require('./filters').filters;

const tagUrl = (tag) => `/tags/${slugify(tag)}/`;
const categoryUrl = (cat) => `/categories/${slugify(cat)}/`;

module.exports = {
  tagUrl,
  categoryUrl,
};

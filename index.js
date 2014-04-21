
/**
 * Expose functions.
 */

module.exports = {
  prepend: prepend,
  append: append,
  before: before,
  after: after,
  replace: replace,
  remove: remove,
};

/**
 * Prepend `node`.
 *
 * @param {Element} el
 * @param {Element} node
 */

function prepend(el, node) {
  var firstChild = el.firstChild;
  firstChild
    ? el.insertBefore(node, firstChild)
    : el.appendChild(node);
}

/**
 * Append `node`.
 *
 * @param {Element} el
 * @param {Element} node
 */

function append(el, node) {
  el.appendChild(node);
}

/**
 * Insert `node` before `el`.
 *
 * @param {Element} el
 * @param {Element} node
 */

function before(el, node) {
  var parentNode = el.parentNode;
  if (parentNode) parentNode.insertBefore(node, el);
}

/**
 * Insert `node` after `el`.
 *
 * @param {Element} el
 * @param {Element} node
 */

function after(el, node) {
  var parentNode = el.parentNode;
  var nextSibling = el.nextSibling;

  if (parentNode) {
    nextSibling
      ? parentNode.insertBefore(node, nextSibling)
      : parentNode.appendChild(node);
  }
}

/**
 * Replace `el` with `node`.
 *
 * @param {Element} el
 * @param {Element} node
 */

function replace(el, node) {
  var parentNode = el.parentNode;
  if (parentNode) parentNode.replaceChild(node, el);
}

/**
 * Remove `el`.
 *
 * @param {Element} el
 */

function remove(el) {
  if (el.remove) return el.remove();
  var parentNode = el.parentNode;
  if (parentNode) el.parentNode.removeChild(el);
}

/**
 * BEM classes (block, [[element], modifier])
 *
 * getClasses('card') => 'card'
 * getClasses('card', 'header') => 'card__header'
 * getClasses('card', ['header', 'author']) => 'card__header__author'
 * getClasses('card', {large: true}) => 'card card--large'
 * getClasses('card', 'header', {large: true}) => 'card__header card__header--large'
 */
const getClasses = (...args) => {
    const block = args[0];
    const element = typeof args[1] === 'string' || Array.isArray(args[1]) ? [].concat(args[1]) : [];
    const modifier = (element.length ? args[2] : args[1]) || {};

    const baseClass = `${block}${element.length ? `__${element.join('__')}` : ''}`;

    return [baseClass]
        .concat(
            Object.entries(modifier)
                .filter(([, value]) => value)
                .map(([key]) => `${baseClass}--${key}`)
        )
        .join(' ');
};

module.exports = getClasses;

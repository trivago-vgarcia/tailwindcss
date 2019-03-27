import _ from 'lodash'

export default function() {
  return function({ addUtilities, config, e }) {
    const utilities = _.fromPairs(
      _.map(config('theme.backgroundPosition'), (value, modifier) => {
        return [
          `.${e(`${config('classesNames').backgroundPosition}-${modifier}`)}`,
          {
            'background-position': value,
          },
        ]
      })
    )

    addUtilities(utilities, config('variants.backgroundPosition'))
  }
}

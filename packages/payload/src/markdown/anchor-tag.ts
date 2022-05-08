function findFirstMatchingConfig(link:any, configs:any) {
    var i, config
    var href = link.attrs[link.attrIndex('href')][1]
  
    for (i = 0; i < configs.length; ++i) {
      config = configs[i]
      if (!config.pattern || new RegExp(config.pattern).test(href)) {
        return config
      }
    }
  }
  
  function applyAttributes(idx:any, tokens:any, attributes:any) {
    Object.keys(attributes).forEach(function (attr) {
      var attrIndex
      var value = attributes[attr]
  
      if (attr === 'className') {
        attr = 'class'
      }
  
      attrIndex = tokens[idx].attrIndex(attr)
  
      if (attrIndex < 0) {
        tokens[idx].attrPush([attr, value])
      } else { 
        tokens[idx].attrs[attrIndex][1] = value 
      }
    })
  }
  
  function markdownitLinkAttributes(this: any, md:any, configs:any) {
    if (!configs) {
      configs = []
    } else {
      configs = Array.isArray(configs) ? configs : [configs]
    }
  
    Object.freeze(configs);
    var _this:any = this;
    var defaultRender = md.renderer.rules.link_open || this.defaultRender
  
    md.renderer.rules.link_open = function (tokens:any, idx:any, options:any, env:any, self:any) {
      var config = findFirstMatchingConfig(tokens[idx], configs)
      var attributes = config && config.attrs
  
      if (attributes) {
        applyAttributes(idx, tokens, attributes)
      }
  
      
      return defaultRender(tokens, idx, options, env, self)
    }
  }
  
  markdownitLinkAttributes.defaultRender = function (tokens:any, idx:any, options:any, env:any, self:any) {
    return self.renderToken(tokens, idx, options)
  }
  
  export default markdownitLinkAttributes;
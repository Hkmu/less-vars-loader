# less-vars-loader

Make less vars available in JavaScript.

## Usage

```javascript
// Output with camalcase format
import vars from '@kemu/less-vars-loader?!./theme.less';
// vars = { colorBrand: 'blue', red: '#D0021B' };

// Disable camelcase output
import vars from '@kemu/less-vars-loader?camelCase=false!./theme.less';
// vars = { 'color-brand': 'blue', red: '#D0021B' };
```

## Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| camelCase | boolean | true | Enable/Disable camelcase |

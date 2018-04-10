

![logo](./logo.png)



# Educational package



> Curated collection of useful JavaScript snippets that you can understand in 20 seconds or less.



- Use <kbd>Ctrl</kbd> + <kbd>F</kbd> or <kbd>command</kbd> + <kbd>F</kbd> to search for a snippet.

#### Installation



You can find a package details [npm](https://www.npmjs.com/package/jsmp-infra-milanoleg).



```bash

# Install with npm

npm install jsmp-infra-milanoleg

```


**Usage examples**



```js



// ES Modules

import { compact } from  'jsmp-infra-milanoleg';

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]);

```



To import snippets with Node:



```js



const { compact } = require('jsmp-infra-milanoleg');

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]);


```




## Table of Contents

### 📚 Array

<details>

<summary>View contents</summary>



*  [`concat`](#concat)

*  [`compact`](#compact)

*  [`unique`](#unique)



</details>




### 📜 String



<details>

<summary>View contents</summary>




*  [`toCamelCase`](#toCamelCase)

*  [`toKebabCase`](#toKebabCase)

*  [`toSnakeCase`](#toSnakeCase)




</details>



## 📚 Array





### concat



Concatenate some arrays into one array.



Uses `_.concat()` to concatenate arrays.



```js
const firstArray = [1, null, 'Hello', 1];
const secondArray = [false, 12, 'someString'];
const  concat = concat(firstArray, secondArray);

```



<details>

<summary>Examples</summary>



```js

concat([1, null, 'Hello', 1], [false, 12, 'someString']); // [1, null, 'Hello', 1, false, 12, 'someString']

```



</details>



<br>[⬆ Back to top](#table-of-contents)






### compact



Removes falsey values from an array.



Uses `_.compact()` to filter out falsey values (`false`, `null`, `0`, `""`, `undefined`, and `NaN`).



```js

const  compact = arr  =>  _.compact([1, null, 'Hello', 1]);

```



<details>

<summary>Examples</summary>



```js

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]

```



</details>



<br>[⬆ Back to top](#table-of-contents)






### unique



Returns new array which contains only unique elements.



Create a new array from the given array.



```js

const  unique = unique([1, null, 'Hello', 1]);

```



<details>

<summary>Examples</summary>



```js

unique([1, null, 'Hello', 1]); // [1, null, 'Hello']

```



</details>



<br>[⬆ Back to top](#table-of-contents)





## 📜 String







### toCamelCase




Converts a string to camelcase.

Break the string into words and combine them capitalizing the first letter of each word, using a regexp.


```js

const toCamelCase = str => {
  let s =
    str &&
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('');
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};

```



<details>

<summary>Examples</summary>



```js

toCamelCase('some_database_field_name'); // 'someDatabaseFieldName'
toCamelCase('Some label that needs to be camelized'); // 'someLabelThatNeedsToBeCamelized'
toCamelCase('some-javascript-property'); // 'someJavascriptProperty'
toCamelCase('some-mixed_string with spaces_underscores-and-hyphens'); // 'someMixedStringWithSpacesUnderscoresAndHyphens'

```



</details>



<br>[⬆ Back to top](#table-of-contents)




### toKebabCase




Converts a string to kebab case.

Break the string into words and combine them adding  `-`  as a separator, using a regexp.



```js

const toKebabCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');

```



<details>

<summary>Examples</summary>



```js

toKebabCase('camelCase'); // 'camel-case'
toKebabCase('some text'); // 'some-text'
toKebabCase('some-mixed_string With spaces_underscores-and-hyphens'); // 'some-mixed-string-with-spaces-underscores-and-hyphens'
toKebabCase('AllThe-small Things'); // "all-the-small-things"
toKebabCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'); // "i-am-listening-to-fm-while-loading-different-url-on-my-browser-and-also-editing-xml-and-html"

```



</details>



<br>[⬆ Back to top](#table-of-contents)







### toSnakeCase



Truncates a string up to a specified length.




Converts a string to snake case.

Break the string into words and combine them adding  `_`  as a separator, using a regexp.



```js

const toSnakeCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');

```



<details>

<summary>Examples</summary>



```js

toSnakeCase('camelCase'); // 'camel_case'
toSnakeCase('some text'); // 'some_text'
toSnakeCase('some-mixed_string With spaces_underscores-and-hyphens'); // 'some_mixed_string_with_spaces_underscores_and_hyphens'
toSnakeCase('AllThe-small Things'); // "all_the_smal_things"
toSnakeCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'); // "i_am_listening_to_fm_while_loading_different_url_on_my_browser_and_also_editing_some_xml_and_html"

```



</details>



<br>[⬆ Back to top](#table-of-contents)






## Credits



*Icons made by [Smashicons](https://www.flaticon.com/authors/smashicons) from [www.flaticon.com](https://www.flaticon.com/) is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/).*
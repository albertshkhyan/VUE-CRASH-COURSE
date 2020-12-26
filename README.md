# Filters in Vue

## 2 interesting possibilities in vue
![IN THIS TOPIC](https://i.imgur.com/C07v5hZ.png)


## 1
* filters that serve to transform data inside templates.
    - Example when need ***filters***
        - let's say the text that is output from the server but is in lower case and let's say we host to bring it all to the upper case.
        ```javascript
        export default {
            filters: {
                //in here we can write some function, exmaple uppercase
                uppercase(value) {
                    return value;
                }
            }
        }
        ```

        ```html
        <p>{{todo.title | uppercase}}</p> <!--specify our function wchich created in filters object-->
        ```
        ![exmplain how work filter property 3](https://i.imgur.com/tyRAnhv.png)


        ⚠ when ***todo.title*** is true in passed as argument in uppercase funntion.



        
## 2    
### filtration and computed properties

* There is an interesting property called <span style="color:green; text-decoration: underline">**watch**</span>. and inside the *watch* object we can create a function whose name must match the  <span style="color:green; text-decoration: underline">**model**</span>  we are watching or any  <span style="color:green; text-decoration: underline">**other variable.**</span> 


![exmplain how work watch 1](https://i.imgur.com/Qgp1i20.png)
![exmplain how work watch 2](https://i.imgur.com/v7mKDWe.png)



* We can do filtering with <span style="color:orange; text-decoration: underline">**watch**</span>, this will be required for some other tasks. we will be interested in an interesting field called <span style="color:green; text-decoration: underline; font-size: 25px">**computed**(computed property)</span>

![exmplain when need computed](https://i.imgur.com/m2XCGsw.png)
## Without computed 😭
```html
<!DOCTYPE html>
<html>
<head>
<title>Изучаем Vue.js</title>
<meta charset="utf-8" />
</head>
<body>
<div id="app">
    <input type="text" v-model="name" />
    <input type="text" v-model="age" />
    <p>Имя: {{name}}   Возраст {{age}}</p>
    <p>{{checkAge()}}</p>
</div>
<script src="https://unpkg.com/vue"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {name:'Tom', age:25},
        methods:{
            checkAge: function(){
                console.log("method");
                if(this.age > 17)
                    return "доступ разрешен";
                else
                    return "доступ запрещен";
            }
        }
    });
</script>
</body>
</html>
```
## With computed 😍
### *computed* is for optimization
#### prevent unnecessary function calls.
```html
<!DOCTYPE html>
<html>
<head>
<title>Изучаем Vue.js</title>
<meta charset="utf-8" />
</head>
<body>
<div id="app">
    <input type="text" v-model="name" />
    <input type="text" v-model="age" />
    <p>Имя: {{name}}   Возраст {{age}}</p>
    <p>{{checkAge()}}</p>
    <p>{{enabled}}</p>
</div>
<script src="https://unpkg.com/vue"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {name:'Tom', age:25},
        computed:{
            enabled: function(){
                console.log("computed");
                if(this.age > 17)
                    return "доступ разрешен";
                else
                    return "доступ запрещен";
            }
        },
        methods:{
            checkAge: function(){
                console.log("method");
                if(this.age > 17)
                    return "доступ разрешен";
                else
                    return "доступ запрещен";
            }
        }
    });
</script>
</body>
</html>
```


***⚠Computed functions, we usually write logic that depends on some models, for example, or variables in Vue***




![when need to use computed](https://i.imgur.com/ojaoiLv.png)

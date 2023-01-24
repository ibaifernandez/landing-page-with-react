1. ¿Cuándo se necesita el _fragment_? <header>...</header> —en solitario— renderiza;
 <header>...</header> + <main>...</main>, no. ¿Por qué?

2. Es importante recordar como se escribe estilos en línea (inline styles) en React.

3. ¿Por qué no puedo hacerlo funcionar como en el proyecto «hello-react»? Es decir, en  
   «hello-react», `index.js` funcionaba con el siguiente código:

```
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Header />
      <Hero />
  </React.StrictMode>
);
```

Pero cuando trato de implementar lo mismo en el proyecto actual no me funciona... ¿por  
 qué?

4. Obsérvese igualmente como los «comentarios HTML» en React no se hacen como si de HTML
   se tratare, mas como si fuere de JavaScript. Eso sí, encapsulando el comentario entre  
   llaves (`{}`).

5. Finalmente, cuando se quiere insertar un espacio en un .jsx, se hace poniendo un  
   espacio entre comillas y llaves (`{" "}`). /

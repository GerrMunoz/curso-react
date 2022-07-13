function App() {
    return (
        <div>
            <h1>Clase 2</h1>
            <h2>Receta brownies</h2>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/68/Chocolatebrownie.JPG"
                alt="brownie-imagen"
                style={{ width: 150 }}
            />
            <h3>Ingredientes</h3>
            <ul>
                <li>100gr de manteca</li>
                <li>150gr de chocolate</li>
                <li>2 huevos</li>
                <li>1 taza de azúcar</li>
                <li>100gr de harina</li>
            </ul>
            <h3>Preparación</h3>
            <ol>
                <li>Calentar la manteca y el chocolate a fuego bien bajo</li>
                <li>Batir los 2 huevos con el azúcar hasta que queden bien blancos</li>
                <li>Agregar el chocolate derretido y batir hasta que esté integrado</li>
                <li>Sumar el harina tamizada e integrar todo</li>
                <li>Colocar en una placa y cocinar al horno fuerte (200-220°) por 20 minutos.</li>
            </ol>
        </div>
    );
}

export default App;

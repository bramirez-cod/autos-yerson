// 1. INVENTARIO SIMULADO EXPANDIDO
const inventarioAutos = [
    { id: 1, marca: 'Toyota', modelo: 'Fortuner', anio: 2022, transmision: 'automatica', tipo: 'suv', precioActual: 52900, precioAnterior: 55000, imagen: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' },
    { id: 2, marca: 'Nissan', modelo: 'Frontier', anio: 2023, transmision: 'automatica', tipo: 'pickup', precioActual: 42900, precioAnterior: 45900, imagen: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80' },
    { id: 3, marca: 'Hyundai', modelo: 'Elantra', anio: 2021, transmision: 'automatica', tipo: 'sedan', precioActual: 18000, precioAnterior: 19500, imagen: 'https://images.unsplash.com/photo-1566008885218-90abf9200ddb?auto=format&fit=crop&w=800&q=80' },
    { id: 4, marca: 'Hyundai', modelo: 'Tucson', anio: 2020, transmision: 'manual', tipo: 'suv', precioActual: 21500, precioAnterior: 23000, imagen: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80' },
    { id: 5, marca: 'Toyota', modelo: 'Corolla', anio: 2019, transmision: 'automatica', tipo: 'sedan', precioActual: 16500, precioAnterior: 18000, imagen: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80' },
    { id: 6, marca: 'Toyota', modelo: 'Hilux', anio: 2024, transmision: 'manual', tipo: 'pickup', precioActual: 45000, precioAnterior: 48000, imagen: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=800&q=80' },
    // { id: 7, marca: 'Nissan', modelo: 'Kicks', anio: 2021, transmision: 'automatica', tipo: 'suv', precioActual: 20000, precioAnterior: 21500, imagen: 'https://images.unsplash.com/photo-1621007947382-d3119efca9fb?auto=format&fit=crop&w=800&q=80' },
    { id: 8, marca: 'Toyota', modelo: 'Yaris', anio: 2020, transmision: 'manual', tipo: 'sedan', precioActual: 14500, precioAnterior: 15800, imagen: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80' },
    // { id: 9, marca: 'Hyundai', modelo: 'Santa Fe', anio: 2023, transmision: 'automatica', tipo: 'suv', precioActual: 38000, precioAnterior: 41000, imagen: 'https://images.unsplash.com/photo-1633507119561-3990263f68ce?auto=format&fit=crop&w=800&q=80' },
    // { id: 10, marca: 'Toyota', modelo: 'RAV4', anio: 2022, transmision: 'automatica', tipo: 'suv', precioActual: 32000, precioAnterior: 34000, imagen: 'https://images.unsplash.com/photo-1568844293986-8d0400ba4704?auto=format&fit=crop&w=800&q=80' },
    // { id: 11, marca: 'Nissan', modelo: 'Navara', anio: 2019, transmision: 'manual', tipo: 'pickup', precioActual: 25000, precioAnterior: 27500, imagen: 'https://images.unsplash.com/photo-1605810756778-57444c2df486?auto=format&fit=crop&w=800&q=80' },
    { id: 12, marca: 'Hyundai', modelo: 'Accent', anio: 2018, transmision: 'manual', tipo: 'sedan', precioActual: 11000, precioAnterior: 12500, imagen: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=80' },
    { id: 13, marca: 'Toyota', modelo: 'Fortuner', anio: 2022, transmision: 'automatica', tipo: 'suv', precioActual: 52900, precioAnterior: 55000, imagen: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' },
    { id: 14, marca: 'Toyota', modelo: 'Fortuner', anio: 2022, transmision: 'automatica', tipo: 'suv', precioActual: 52900, precioAnterior: 55000, imagen: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' },
    { id: 15, marca: 'Toyota', modelo: 'Fortuner', anio: 2022, transmision: 'automatica', tipo: 'suv', precioActual: 52900, precioAnterior: 55000, imagen: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' },
    { id: 16, marca: 'Toyota', modelo: 'Fortuner', anio: 2022, transmision: 'automatica', tipo: 'suv', precioActual: 52900, precioAnterior: 55000, imagen: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' },
    { id: 17, marca: 'Toyota', modelo: 'Fortuner', anio: 2022, transmision: 'automatica', tipo: 'suv', precioActual: 52900, precioAnterior: 55000, imagen: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' },
    { id: 18, marca: 'Toyota', modelo: 'Fortuner', anio: 2022, transmision: 'automatica', tipo: 'suv', precioActual: 52900, precioAnterior: 55000, imagen: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' },
    { id: 19, marca: 'Toyota', modelo: 'Fortuner', anio: 2022, transmision: 'automatica', tipo: 'suv', precioActual: 52900, precioAnterior: 55000, imagen: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' },
    { id: 20, marca: 'Toyota', modelo: 'Fortuner', anio: 2022, transmision: 'automatica', tipo: 'suv', precioActual: 52900, precioAnterior: 55000, imagen: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' },
    { id: 21, marca: 'Toyota', modelo: 'Fortuner', anio: 2022, transmision: 'automatica', tipo: 'suv', precioActual: 52900, precioAnterior: 55000, imagen: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' },
];

// 2. FUNCIÓN PARA PINTAR TARJETAS 
const renderizarTarjetas = (autos, contenedorID) => {
    const contenedor = document.getElementById(contenedorID);
    if (!contenedor) return;
    
    contenedor.innerHTML = '';

    if (autos.length === 0) {
        contenedor.innerHTML = '<p style="padding: 20px; color:#666; width: 100%; text-align: center; grid-column: 1 / -1;">No se encontraron vehículos con esas características.</p>';
        return;
    }

    autos.forEach(auto => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta-veinsa');
        tarjeta.style.cursor = 'pointer';
        tarjeta.onclick = () => window.location.href = `detalle.html?id=${auto.id}`;
        
        const precioActualFmt = auto.precioActual.toLocaleString('en-US');
        const precioAnteriorFmt = auto.precioAnterior.toLocaleString('en-US');
        const transVisual = auto.transmision === 'automatica' ? 'AUTOMATICA' : 'MANUAL';
        const tagNuevo = auto.anio >= 2023 ? '<span class="tag-estado">Nuevo</span>' : '';

        tarjeta.innerHTML = `
            <div class="img-veinsa-container">
                ${tagNuevo}
                <img src="${auto.imagen}" alt="${auto.marca} ${auto.modelo}">
            </div>
            <div class="info-veinsa">
                <div class="precios-veinsa">
                    <span class="precio-ahora">Ahora $${precioActualFmt}</span>
                    <span class="precio-antes">Antes $${precioAnteriorFmt}</span>
                </div>
                <div class="modelo-veinsa">${auto.marca} ${auto.modelo}</div>
                <div class="marca-veinsa">${auto.marca}</div>
                <div class="detalles-veinsa">${auto.anio} · ${transVisual}</div>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    });
};

// 3. LÓGICA DE NAVEGACIÓN, FILTRADO Y PAGINACIÓN
document.addEventListener('DOMContentLoaded', () => {
    
    const urlActual = window.location.pathname.toLowerCase();
    const esPaginaCatalogo = urlActual.includes('catalogo.html');

    // Función interna para filtrar
    const obtenerResultadosFiltrados = (filtros = {}) => {
        let resultados = inventarioAutos;
        if (filtros.texto) {
            const b = filtros.texto.toLowerCase();
            resultados = resultados.filter(a => a.marca.toLowerCase().includes(b) || a.modelo.toLowerCase().includes(b));
        }
        if (filtros.marca) resultados = resultados.filter(a => a.marca.toLowerCase() === filtros.marca.toLowerCase());
        if (filtros.tipo && filtros.tipo !== 'todos') resultados = resultados.filter(a => a.tipo.toLowerCase() === filtros.tipo.toLowerCase());
        return resultados;
    };

    if (esPaginaCatalogo) {
        // ==========================================
        // ESTAMOS EN: catalogo.html
        // ==========================================
        
        const gridAutos = document.getElementById('grid-autos');
        const paginacionContainer = document.getElementById('paginacion');
        const contadorResultados = document.getElementById('contador-resultados');
        const formFiltros = document.getElementById('form-filtros-catalogo');
        const btnLimpiar = document.getElementById('btn-limpiar-filtros');
        const selectOrdenar = document.getElementById('select-ordenar');

        // Variables de Paginación
        const AUTOS_POR_PAGINA = 12;
        let paginaActual = 1;
        let autosFiltradosActuales = [];

        // Función de paginación con flechas
        const mostrarPagina = (pagina) => {
            paginaActual = pagina;
            
            const indiceInicio = (pagina - 1) * AUTOS_POR_PAGINA;
            const indiceFin = indiceInicio + AUTOS_POR_PAGINA;
            const autosDeEstaPagina = autosFiltradosActuales.slice(indiceInicio, indiceFin);
            
            renderizarTarjetas(autosDeEstaPagina, 'grid-autos');
            
            if(contadorResultados) {
                const total = autosFiltradosActuales.length;
                if(total === 0) {
                    contadorResultados.textContent = `Mostrando 0 vehículos`;
                } else {
                    contadorResultados.textContent = `Mostrando ${indiceInicio + 1} - ${Math.min(indiceFin, total)} de ${total} vehículos`;
                }
            }

            if(paginacionContainer) {
                paginacionContainer.innerHTML = '';
                const totalPaginas = Math.ceil(autosFiltradosActuales.length / AUTOS_POR_PAGINA);
                
                if(totalPaginas > 1) {
                    // BOTÓN ANTERIOR (❮)
                    const btnPrev = document.createElement('button');
                    btnPrev.className = `btn-pagina btn-flecha ${paginaActual === 1 ? 'disabled' : ''}`;
                    btnPrev.innerHTML = '&#10094;'; // Ícono de flecha izquierda
                    btnPrev.disabled = paginaActual === 1;
                    btnPrev.addEventListener('click', () => {
                        if (paginaActual > 1) {
                            mostrarPagina(paginaActual - 1);
                            document.querySelector('.catalogo-layout').scrollIntoView({ behavior: 'smooth' });
                        }
                    });
                    paginacionContainer.appendChild(btnPrev);

                    // NÚMEROS DE PÁGINA
                    for(let i = 1; i <= totalPaginas; i++) {
                        const btn = document.createElement('button');
                        btn.className = `btn-pagina ${i === paginaActual ? 'active' : ''}`;
                        btn.textContent = i;
                        btn.addEventListener('click', () => {
                            mostrarPagina(i);
                            document.querySelector('.catalogo-layout').scrollIntoView({ behavior: 'smooth' });
                        });
                        paginacionContainer.appendChild(btn);
                    }

                    // BOTÓN SIGUIENTE (❯)
                    const btnNext = document.createElement('button');
                    btnNext.className = `btn-pagina btn-flecha ${paginaActual === totalPaginas ? 'disabled' : ''}`;
                    btnNext.innerHTML = '&#10095;'; // Ícono de flecha derecha
                    btnNext.disabled = paginaActual === totalPaginas;
                    btnNext.addEventListener('click', () => {
                        if (paginaActual < totalPaginas) {
                            mostrarPagina(paginaActual + 1);
                            document.querySelector('.catalogo-layout').scrollIntoView({ behavior: 'smooth' });
                        }
                    });
                    paginacionContainer.appendChild(btnNext);
                }
            }
        };

        // Leer los parámetros de la URL
        const parametrosURL = new URLSearchParams(window.location.search);
        const filtrosRecibidos = {
            texto: parametrosURL.get('texto') || '',
            marca: parametrosURL.get('marca') || '',
            tipo: parametrosURL.get('tipo') || ''
        };

        if(formFiltros) {
            if(filtrosRecibidos.texto) formFiltros.texto.value = filtrosRecibidos.texto;
            if(filtrosRecibidos.marca) formFiltros.marca.value = filtrosRecibidos.marca;
            if(filtrosRecibidos.tipo) formFiltros.tipo.value = filtrosRecibidos.tipo;

            formFiltros.addEventListener('submit', (e) => {
                e.preventDefault();
                autosFiltradosActuales = obtenerResultadosFiltrados({
                    texto: formFiltros.texto.value,
                    marca: formFiltros.marca.value,
                    tipo: formFiltros.tipo.value
                });
                mostrarPagina(1);
            });
        }

        if(btnLimpiar) {
            btnLimpiar.addEventListener('click', () => {
                formFiltros.reset();
                autosFiltradosActuales = inventarioAutos;
                window.history.replaceState({}, document.title, window.location.pathname); 
                mostrarPagina(1);
            });
        }

        if(selectOrdenar) {
            selectOrdenar.addEventListener('change', (e) => {
                const orden = e.target.value;
                if(orden === 'precio-menor') {
                    autosFiltradosActuales.sort((a, b) => a.precioActual - b.precioActual);
                } else if(orden === 'precio-mayor') {
                    autosFiltradosActuales.sort((a, b) => b.precioActual - a.precioActual);
                } else {
                    autosFiltradosActuales.sort((a, b) => b.anio - a.anio);
                }
                mostrarPagina(1); 
            });
        }

        autosFiltradosActuales = obtenerResultadosFiltrados(filtrosRecibidos);
        autosFiltradosActuales.sort((a, b) => b.anio - a.anio);
        mostrarPagina(1);

    } else {
        // ==========================================
        // ESTAMOS EN: index.html (Inicio)
        // ==========================================
        
        renderizarTarjetas(inventarioAutos, 'grid-autos');
        renderizarTarjetas(inventarioAutos.filter(a => a.tipo === 'sedan'), 'carrusel-sedan');
        renderizarTarjetas(inventarioAutos.filter(a => a.tipo === 'suv'), 'carrusel-suv');
        renderizarTarjetas(inventarioAutos.filter(a => a.tipo === 'pickup'), 'carrusel-pickup');

        const formBusqueda = document.getElementById('form-busqueda');
        if (formBusqueda) {
            formBusqueda.addEventListener('submit', (e) => {
                e.preventDefault();
                const texto = formBusqueda.busqueda_texto.value;
                const marca = formBusqueda.marca.value;
                const tipo = formBusqueda.tipo.value;
                window.location.href = `catalogo.html?texto=${texto}&marca=${marca}&tipo=${tipo}`;
            });
        }

        document.querySelectorAll('.btn-indeciso').forEach(boton => {
            boton.addEventListener('click', (e) => {
                e.preventDefault();
                const tipo = boton.getAttribute('data-tipo');
                window.location.href = `catalogo.html?tipo=${tipo}`;
            });
        });

        const btnVerTodos = document.getElementById('btn-ver-todos');
        if (btnVerTodos) {
            btnVerTodos.addEventListener('click', () => {
                window.location.href = `catalogo.html?tipo=todos`;
            });
        }
        
        const botonesPrev = document.querySelectorAll('.prev-btn');
        const botonesNext = document.querySelectorAll('.next-btn');
        botonesNext.forEach(boton => boton.addEventListener('click', function() {
            const s = this.parentElement.querySelector('.carrusel-scroll');
            if(s) s.scrollBy({ left: 300, behavior: 'smooth' });
        }));
        botonesPrev.forEach(boton => boton.addEventListener('click', function() {
            const s = this.parentElement.querySelector('.carrusel-scroll');
            if(s) s.scrollBy({ left: -300, behavior: 'smooth' });
        }));
    }

    // ==========================================
    // CÓDIGO COMPARTIDO
    // ==========================================
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('activo');
        });
    }
});

// ==========================================
    // LÓGICA DE LA PÁGINA DE CONTACTO
    // ==========================================
    const formContacto = document.getElementById('form-contacto');
    const mensajeExito = document.getElementById('mensaje-exito');

    if(formContacto) {
        formContacto.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página salte al inicio

            // 1. Mostrar el mensaje de éxito verde
            mensajeExito.style.display = 'block';
            
            // 2. Limpiar todos los campos del formulario
            formContacto.reset();

            // 3. Ocultar el mensaje verde después de 5 segundos
            setTimeout(() => {
                mensajeExito.style.display = 'none';
            }, 5000);
        });
    }


    // ==========================================
// LÓGICA DE LA PÁGINA DE DETALLE
// ==========================================
if (window.location.pathname.includes('detalle.html')) {
    const params = new URLSearchParams(window.location.search);
    const idAuto = parseInt(params.get('id'));

    const auto = inventarioAutos.find(a => a.id === idAuto);

    if (auto) {
        // --- 1. LLENAR DATOS PRINCIPALES ---
        const precioFmt = auto.precioActual.toLocaleString('en-US');
        const cuotaFmt = Math.round(auto.precioActual * 0.02).toLocaleString('en-US');

        document.getElementById('det-titulo').textContent = `${auto.marca} ${auto.modelo} (${auto.anio})`;
        document.getElementById('det-marca-codigo').textContent = `${auto.marca} - ${100000 + auto.id}`;
        document.getElementById('det-precio').textContent = `$ ${precioFmt}`;
        document.getElementById('det-cuota').textContent = `$${cuotaFmt}`;
        document.getElementById('det-km').textContent = (auto.id * 12500) + " Km";
        document.getElementById('det-trans').textContent = auto.transmision.toUpperCase();
        
        // Botón Enviar Información (WhatsApp)
        const btnEnviar = document.getElementById('btn-enviar-info');
        if(btnEnviar) {
            const numeroTelefono = "50683307876";
            const mensaje = `Hola Autos Yerson, me interesa solicitar información sobre el ${auto.marca} ${auto.modelo} (${auto.anio}) valorado en $${precioFmt}.`;
            btnEnviar.href = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
        }

        // --- 2. LÓGICA DE LA GALERÍA (CARRUSEL PRINCIPAL) ---
        const galeriaFotos = [
            auto.imagen,
            'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80'
        ];

        const imgPrincipal = document.getElementById('det-imagen-principal');
        const contenedorMiniaturas = document.getElementById('det-miniaturas');
        
        if (imgPrincipal && contenedorMiniaturas) {
            let indiceActual = 0; // Guarda qué foto estamos viendo

            // Función maestra para cambiar de foto principal
            const cambiarFoto = (nuevoIndice) => {
                // Efecto bucle: si llegamos al final, vuelve al principio y viceversa
                if (nuevoIndice >= galeriaFotos.length) indiceActual = 0;
                else if (nuevoIndice < 0) indiceActual = galeriaFotos.length - 1;
                else indiceActual = nuevoIndice;

                // 1. Cambiar la foto grande con parpadeo suave
                imgPrincipal.style.opacity = '0.5';
                setTimeout(() => {
                    imgPrincipal.src = galeriaFotos[indiceActual];
                    imgPrincipal.style.opacity = '1';
                }, 150);

                // 2. Mover la selección visual a la miniatura correcta
                const todasLasCajitas = document.querySelectorAll('.mini-img-box');
                todasLasCajitas.forEach(c => c.classList.remove('activa'));
                
                if (todasLasCajitas[indiceActual]) {
                    todasLasCajitas[indiceActual].classList.add('activa');
                    // 3. Auto-scroll de miniaturas si hay muchas
                    todasLasCajitas[indiceActual].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
            };

            // Iniciar galería
            imgPrincipal.src = galeriaFotos[0];
            contenedorMiniaturas.innerHTML = ''; 

            // Generar las miniaturas
            galeriaFotos.forEach((fotoUrl, index) => {
                const divMini = document.createElement('div');
                divMini.className = `mini-img-box ${index === 0 ? 'activa' : ''}`;
                divMini.innerHTML = `<img src="${fotoUrl}" class="img-thumb" alt="Vista ${index+1}">`;
                
                // Al tocar miniatura, saltar a esa foto
                divMini.addEventListener('click', () => cambiarFoto(index));

                contenedorMiniaturas.appendChild(divMini);
            });

            // Flechas: ahora cambian la foto grande
            const btnPrevMini = document.querySelector('.prev-mini');
            const btnNextMini = document.querySelector('.next-mini');

            if(btnNextMini) btnNextMini.addEventListener('click', () => cambiarFoto(indiceActual + 1));
            if(btnPrevMini) btnPrevMini.addEventListener('click', () => cambiarFoto(indiceActual - 1));
        }

        // --- 4. LÓGICA DE EQUIPAMIENTO (EN TARJETAS EXACTAS) ---
        const listaExtras = [
            "Motor 4.000cc 1GR-FE", "6 cilindros gasolina", "Automático Dual", 
            "7 pasajeros", "Todo terreno 4x4", "Control de descenso", 
            "Sistema A-TRAC", "Asientos abatibles", "Calefacción de asientos", 
            "Asientos eléctricos", "Bluetooth", "Cámara de reversa", 
            "Radio pantalla Android Carplay", "Controles de radio en el volante", 
            "Comando de voz", "Aros", "Halogenos", 
            "Frenada de disco en las 4 ruedas", "Abs", "Cruise Control", 
            "Paquete eléctrico", "Control de tracción", "Control electrónico de estabilidad", 
            "Alarma", "Volante ajustable", "Computadora de viaje", 
            "8 air bag", "Aire acondicionado climatizado", "Racks", 
            "Sensor de presión de llantas"
        ];

        const gridExtras = document.getElementById('det-equipamiento-tarjetas');
        
        if (gridExtras) {
            gridExtras.innerHTML = ''; 
            
            // Icono SVG oficial (un check rojo encapsulado en un círculo, estilo agencia)
            const iconoSvg = `<svg viewBox="0 0 512 512" width="16" height="16" fill="#da2128"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>`;

            listaExtras.forEach(extra => {
                // Quitamos la "V" inicial si la tiene
                const textoLimpio = extra.replace(/^V\s+/i, '');
                
                const divFicha = document.createElement('div');
                divFicha.className = 'ficha-ex'; // La misma clase de la Imagen 1
                
                // Recreamos la estructura HTML idéntica a la de Kilometraje
                divFicha.innerHTML = `
                    <div class="ficha-head">
                        <span style="display: flex; align-items: center; margin-right: 8px;">${iconoSvg}</span>
                        <span class="ficha-titulo">Equipamiento</span>
                    </div>
                    <div class="ficha-valor" style="text-transform: none; color: #555;">${textoLimpio}</div>
                `;
                
                gridExtras.appendChild(divFicha);
            });
        }

        // --- 3. LÓGICA DE VEHÍCULOS SUGERIDOS ---
        let sugeridos = inventarioAutos.filter(a => a.tipo === auto.tipo && a.id !== auto.id);
        if (sugeridos.length === 0) sugeridos = inventarioAutos.filter(a => a.id !== auto.id);
        
        // Pintamos las tarjetas
        renderizarTarjetas(sugeridos.slice(0, 6), 'carrusel-sugeridos');

        // Flechas del carrusel de sugeridos
        const scrollSugeridos = document.getElementById('carrusel-sugeridos');
        const btnPrevSug = document.querySelector('.seccion-sugeridos .prev-btn');
        const btnNextSug = document.querySelector('.seccion-sugeridos .next-btn');

        if(btnNextSug && scrollSugeridos) btnNextSug.addEventListener('click', () => scrollSugeridos.scrollBy({ left: 320, behavior: 'smooth' }));
        if(btnPrevSug && scrollSugeridos) btnPrevSug.addEventListener('click', () => scrollSugeridos.scrollBy({ left: -320, behavior: 'smooth' }));
    }
}
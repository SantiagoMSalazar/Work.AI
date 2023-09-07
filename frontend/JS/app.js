const props = {
    "tipo_establecimiento": {
      "Sucursal": 2,
      "Matriz": 0,
      "Unico": 1
    },
    "ciuu_desc": {
      "Venta al por mayor de alimentos, bebidas y tabaco.": 0,
      "Venta al por menor de otros productos nuevos en comercios especializados.": 1,
      "Venta al por menor de combustibles para vehículos automotores en comercios especializados.": 2,
      "Fabricación de productos de plástico.": 3,
      "Actividades de restaurantes y de servicio móvil de comidas.": 4,
      "Venta al por mayor de textiles, prendas de vestir y calzado.": 5,
      "Venta de partes, piezas y accesorios para vehículos automotores.": 6,
      "Programación y transmisiones de televisión.": 7,
      "Recolección de desechos no peligrosos.": 8,
      "Captación, tratamiento y distribución de agua.": 9,
      "Venta al por menor de productos farmacéuticos y medicinales, cosméticos y artículos de tocador en comercios especializados.": 10,
      "Venta al por menor de aparatos eléctricos de uso doméstico, muebles, equipo de iluminación y otros enseres domésticos en comercios especializados.": 11,
      "Venta de vehículos automotores.": 12,
      "Fabricación de prendas de vestir, excepto prendas de piel.": 13,
      "Elaboración de macarrones, fideos, alcuzcuz y productos farináceos similares.": 14,
      "Generación, transmisión y distribución de energía eléctrica.": 15,
      "Industrias básicas de hierro y acero.": 16,
      "Fabricación de otros productos elaborados de metal n.c.p.": 17,
      "Fabricación de cubiertas y cámaras de caucho; recauchutado y renovación de cubiertas de caucho.": 18,
      "Actividades de impresión.": 19,
      "Mantenimiento y reparación de vehículos automotores.": 20,
      "Actividades de hospitales y clínicas.": 21,
      "Venta al por mayor de otros enseres domésticos.": 22,
      "Construcción de carreteras y líneas de ferrocarril.": 23,
      "Alquiler de otros tipos de maquinaria, equipo y bienes tangibles.": 24,
      "Enseñanza superior.": 25,
      "Otras actividades de venta al por menor en comercios no especializados.": 26,
      "Elaboración de vinos.": 27,
      "Venta al por mayor de otros tipos de maquinaria y equipo.": 28,
      "Fabricación de aparatos de uso doméstico.": 29,
      "Fabricación de materiales de construcción de arcilla.": 30,
      "Venta al por menor de artículos de ferretería, pinturas y productos de vidrio en comercios especializados.": 31,
      "Venta al por mayor de combustibles sólidos, líquidos y gaseosos y productos conexos.": 32,
      "Venta al por mayor de materiales para la construcción, artículos de ferretería, equipo, materiales de fontanería (plomería o gasfitería) y calefacción.": 33,
      "Elaboración y conservación de carne.": 34,
      "Cría de cerdos.": 35,
      "Fabricación de substancias químicas básicas.": 36,
      "Actividades inmobiliarias realizadas con bienes propios o arrendados.": 37,
      "Fabricación de pinturas, barnices y productos de revestimiento similares, tintas de imprenta y masillas.": 38,
      "Fabricación de artículos de hormigón, de cemento y yeso.": 39,
      "Fabricación de muebles.": 40,
      "Tejedura de productos textiles.": 41,
      "Fabricación de papel y cartón ondulado y de envases de papel y cartón.": 42,
      "Seguros generales.": 43,
      "Enseñanza preprimaria y primaria.": 44,
      "Reparación de equipo electrónico y óptico.": 45,
      "Venta al por mayor de desperdicios, desechos, chatarra y otros productos n.c.p.": 46,
      "Transmisiones de radio.": 47,
      "Otras actividades de atención de la salud humana.": 48,
      "Enseñanza secundaria de formación general.": 49,
      "Destilación, rectificación y mezcla de bebidas alcohólicas.": 50,
      "Elaboración de productos lácteos.": 51,
      "Venta al por mayor de maquinaria, equipo y materiales agropecuarios.": 52,
      "Actividades de médicos y odontólogos.": 53,
      "Venta, mantenimiento y reparación de motocicletas y de sus partes, piezas y accesorios.": 54,
      "Fabricación de abonos y compuestos de nitrógeno.": 55,
      "Elaboración de otros productos alimenticios n.c.p.": 56,
      "Construcción de edificios.": 57,
      "Fabricación de aparatos electrónicos de consumo.": 58,
      "Venta al por menor de alimentos en comercios especializados.": 59,
      "Venta al por menor de equipo de sonido y vídeo en comercios especializados.": 60,
      "Suministro de comidas por encargo.": 61,
      "Venta al por menor en comercios no especializados con predominio de la venta de alimentos, bebidas o tabaco.": 62,
      "Venta al por mayor a cambio de una comisión o por contrato.": 63,
      "Enseñanza de formación técnica y profesional.": 64,
      "Venta al por mayor de materias primas agropecuarias y animales vivos.": 65,
      "Actividades de consultoría de gestión.": 66,
      "Actividades de telecomunicaciones alámbrica.": 67,
      "Fabricación de hojas de madera para enchapado y tableros a base de madera.": 68,
      "Actividades de oficinas principales.": 69,
      "Elaboración de alimentos preparados para animales.": 70,
      "Actividades de servicios vinculadas al transporte terrestre.": 71,
      "Actividades de seguridad privada.": 72,
      "Otras actividades de transporte de pasajeros por vía terrestre.": 73,
      "Transporte urbano y suburbano de pasajeros por vía terrestre.": 74,
      "Elaboración y conservación de pescados, crustáceos y moluscos.": 75,
      "Actividades de mensajería.": 76,
      "Elaboración y conservación de frutas, legumbres y hortalizas.": 77,
      "Transporte de carga por carretera.": 78,
      "Venta al por mayor de metales y minerales metalíferos.": 79,
      "Suministro de vapor y de aire acondicionado.": 80,
      "Extracción de otros minerales metalíferos no ferrosos.": 81,
      "Transporte de carga por ferrocarril.": 82,
      "Otros tipos de enseñanza n.c.p.": 83,
      "Pompas fúnebres y actividades conexas.": 84,
      "Venta al por menor de prendas de vestir, calzado y artículos de cuero en comercios especializados.": 85,
      "Actividades de peluquería y otros tratamientos de belleza.": 86,
      "Elaboración de productos de molinería.": 87,
      "Transporte de carga marítimo y de cabotaje.": 88,
      "Fabricación de otros productos químicos n.c.p.": 89,
      "Actividades de alojamiento para estancias cortas.": 90,
      "Elaboración de azúcar.": 91,
      "Actividades de agencias de viajes.": 92,
      "Elaboración de productos de panadería.": 93,
      "Fabricación de otras bombas, compresores, grifos y válvulas.": 94,
      "Fabricación de productos primarios de metales preciosos y metales no ferrosos.": 95,
      "Actividades combinadas de servicios administrativos de oficina.": 96,
      "Reparación de maquinaria.": 97,
      "Fabricación de productos de la refinación del petróleo.": 98,
      "Fabricación de productos farmacéuticos, sustancias químicas medicinales y productos botánicos de uso farmacéutico.": 99,
      "Venta al por menor de libros, periódicos y artículos de papelería en comercios especializados.": 100,
      "Fabricación de vidrio y productos de vidrio.": 101,
      "Elaboración de bebidas malteadas y de malta.": 102,
      "Seguros de vida.": 103,
      "Publicidad.": 104,
      "Actividades de servicios vinculadas al transporte acuático.": 105,
      "Otras actividades de apoyo al transporte.": 106,
      "Transporte de pasajeros por vía aérea.": 107,
      "Fabricación de jabones y detergentes, preparados para limpiar y pulir, perfumes y preparados de tocador.": 108,
      "Reparación de computadoras y equipo periférico.": 109,
      "Venta al por menor de computadores, equipo periférico, programas informáticos y equipo de telecomunicaciones en comercios especializados.": 110,
      "Actividades de clubes deportivos.": 111,
      "Fabricación de motores, generadores, transformadores eléctricos y aparatos de distribución y control de la energía eléctrica.": 112,
      "Actividades de contabilidad, teneduría de libros y auditorias; consultoría fiscal.": 113,
      "Fabricación de otros artículos del papel y cartón.": 114,
      "Fabricación de pilas, baterías y acumuladores.": 115,
      "Fabricación de cemento, cal y yeso.": 116,
      "Fabricación de tanques, depósitos y recipientes de metal.": 117,
      "Otras industrias manufactureras n.c.p.": 118,
      "Actividades de operadores turísticos.": 119,
      "Aserrado y acepilladura de madera.": 120,
      "Acuicultura marina.": 121,
      "Fabricación de otros hilos y cables eléctricos.": 122,
      "Instalaciones eléctricas.": 123,
      "Fabricación de plásticos y cauchos sintéticos en formas primarias.": 124,
      "Fabricación de plaguicidas y otros productos químicos de uso agropecuario.": 125,
      "Extracción de piedra, arena y arcilla.": 126,
      "Cría de aves de corral.": 127,
      "Fabricación de artículos confeccionados de materiales textiles, excepto prendas de vestir.": 128,
      "Actividades de juegos de azar y apuestas.": 129,
      "Otras actividades de asistencia social sin alojamiento.": 130,
      "Actividades de asistencia social sin alojamiento para personas de edad y personas con discapacidad.": 131,
      "Actividades inmobiliarias realizadas a cambio de una retribución o por contrato.": 132,
      "Otras actividades deportivas.": 133,
      "Venta al por mayor de computadoras, equipo y programas informáticos.": 134,
      "Actividades de servicios de sistemas de seguridad.": 135,
      "Otras actividades de servicio de comidas.": 136,
      "Elaboración de bebidas no alcohólicas; producción de aguas minerales y otras aguas embotelladas.": 137,
      "Fabricación de equipo eléctrico de iluminación.": 138,
      "Lavado y limpieza, incluida la limpieza en seco, de productos textiles y de piel.": 139,
      "Fabricación de gas; distribución de combustibles gaseosos por tuberías.": 140,
      "Manipulación de carga.": 141,
      "Otras actividades de telecomunicaciones.": 142,
      "Actividades de servicios relacionados con la impresión.": 143,
      "Actividades jurídicas.": 144,
      "Otras actividades de servicios de apoyo a empresas n.c.p.": 145,
      "Actividades de centros de llamadas.": 146,
      "Reparación de aparatos de uso doméstico y equipo doméstico y de jardinería.": 147,
      "Fabricación de carrocerías para vehículos automotores; fabricación de remolques y semirremolques.": 148,
      "Otras actividades de tecnología de la información y de servicios informáticos.": 149,
      "Fabricación de cuerdas, cordeles, bramantes y redes.": 150,
      "Almacenamiento y depósito.": 151,
      "Venta al por mayor de equipo, partes y piezas electrónicos y de telecomunicaciones.": 152,
      "Otras actividades de atención en instituciones.": 153,
      "Construcción de proyectos de servicios públicos.": 154,
      "Cultivo de frutos oleaginosos.": 155,
      "Actividades de consultoría de informática y de gestión de instalaciones informáticas.": 156,
      "Ensayos y análisis técnicos.": 157,
      "Otras actividades profesionales, científicas y técnicas n.c.p.": 158,
      "Otras actividades de servicios personales n.c.p.": 159,
      "Enseñanza cultural.": 160,
      "Recolección de desechos peligrosos.": 161,
      "Actividades de telecomunicaciones por satélite.": 162,
      "Tratamiento y eliminación de desechos no peligrosos.": 163,
      "Elaboración de cacao, chocolate y productos de confitería.": 164,
      "Limpieza general de edificios.": 165,
      "Fabricación de motocicletas.": 166,
      "Actividades de servicios vinculadas al transporte aéreo.": 167,
      "Organización de convenciones y exposiciones comerciales.": 168,
      "Reparación de aparatos electrónicos de consumo.": 169,
      "Fontanería (plomería, gasfitería) e instalación de calefacción y aire acondicionado.": 170,
      "Actividades de arquitectura e ingeniería y actividades conexas de consultoría técnica.": 171,
      "Otras publicaciones.": 172,
      "Actividades especializadas de diseño.": 173,
      "Cultivo de especias y de plantas aromáticas, medicinales y farmacéuticas.": 174,
      "Elaboración de aceites y grasas de origen vegetal y animal.": 175,
      "Venta al por menor de equipo de deporte en comercios especializados.": 176,
      "Actividades de apoyo para la extracción de petróleo y gas natural.": 177,
      "Actividades de exhibición de películas cinematográficas y cintas de vídeo.": 178,
      "Actividades postales.": 179,
      "Otros servicios de reservas y actividades conexas.": 180,
      "Transporte por tuberías.": 181,
      "Venta al por menor de productos textiles en comercios especializados.": 182,
      "Fabricación de productos refractarios.": 183,
      "Preparación e hilatura de fibras textiles.": 184,
      "Fabricación de artículos de punto y ganchillo.": 185,
      "Otras actividades de alojamiento.": 186,
      "Fabricación de calzado.": 187,
      "Actividades de fotografía.": 188,
      "Explotación de instalaciones deportivas.": 189,
      "Fabricación de partes, piezas y accesorios para vehículos automotores.": 190,
      "Actividades de agencias de cobro y agencias de calificación crediticia.": 191,
      "Fabricación de instrumentos y materiales médicos y odontológicos.": 192,
      "Actividades de organizaciones religiosas.": 193,
      "Venta al por menor por correo y por internet.": 194,
      "Actividades de telecomunicaciones inalámbricas.": 195,
      "Alquiler de vehículos automotores.": 196,
      "Fabricación de productos metálicos para uso estructural.": 197,
      "Reparación de equipo eléctrico.": 198,
      "Actividades de apoyo para la explotación de otras minas y canteras.": 199,
      "Otras actividades de esparcimiento y recreativas n.c.p.": 200,
      "Actividades de bibliotecas y archivos.": 201,
      "Actividades de agencias de empleo.": 202,
      "Construcción de otras obras de ingeniería civil.": 203,
      "Instalación de maquinaria y equipo industriales.": 204,
      "Reparación de equipo de comunicaciones.": 205,
      "Actividades de la administración pública en general.": 206,
      "Otras actividades de dotación de recursos humanos.": 207,
      "Publicación de programas informáticos.": 208,
      "Actividades de parques de atracciones y parques temáticos.": 209,
      "Venta al por menor de otros productos en puestos de venta y mercados.": 210,
      "Extracción de petróleo crudo.": 211,
      "Arrendamiento de propiedad intelectual y productos similares, excepto obras protegidas por derechos de autor.": 212,
      "Fondos de pensión.": 213,
      "Transporte de carga, por vías de navegación interiores.": 214,
      "Actividades de atención en instituciones para personas con retraso mental, enfermos mentales y toxicómanos.": 215,
      "Fabricación de componentes y tableros electrónicos.": 216,
      "Elaboración de comidas y platos preparados.": 217,
      "Evacuación de aguas residuales.": 218,
      "Actividades de programación informática.": 219,
      "Actividades de descontaminación y otros servicios de  gestión de desechos.": 220,
      "Actividades de envasado y empaquetado.": 221,
      "Transporte de carga por vía aérea.": 222,
      "Transporte de pasajeros marítimo y de cabotaje.": 223,
      "Construcción de buques y estructuras flotantes.": 224,
      "Investigaciones y desarrollo experimental en el campo de las ciencias naturales y la ingeniería.": 225,
      "Cría de ganado bovino y búfalos.": 226,
      "Reparación de productos elaborados de metal.": 227,
      "Cultivo de frutas tropicales y subtropicales.": 228,
      "Otras actividades de limpieza de edificios e instalaciones industriales.": 229,
      "Portales web.": 230,
      "Fabricación de otros productos de caucho.": 231,
      "Otras actividades especializadas de construcción.": 232,
      "Extracción de gas natural.": 233,
      "Actividades creativas, artísticas y de entretenimiento.": 234,
      "Actividades de producción de películas cinematográficas, vídeos y programas de televisión.": 235,
      "Curtido y adobo de cueros; adobo y teñido de pieles.": 236,
      "Recuperación de materiales.": 237,
      "Fabricación de generadores de vapor, excepto calderas de agua caliente para calefacción central.": 238,
      "Procesamiento de datos, hospedaje y actividades conexas.": 239,
      "Otras actividades de venta al por menor no realizadas en comercios, puestos de venta o mercados.": 240,
      "Estudios de mercado y encuestas de opinión pública.": 241,
      "Terminación y acabado de edificios.": 242,
      "Actividades de distribución de películas cinematográficas, vídeos y programas de televisión.": 243,
      "Fabricación de tejidos de punto y ganchillo.": 244,
      "Actividades de postproducción de películas cinematográficas, vídeos y programas de televisión.": 245,
      "Tratamiento y eliminación de desechos peligrosos.": 246,
      "Actividades de grabación de sonido y edición de música.": 247,
      "Reaseguros.": 248,
      "Fabricación de otros tipos de maquinaria de uso general.": 249,
      "Reparación de equipo de transporte, excepto vehículos automotores.": 250,
      "Fabricación de artículos de cuchillería, herramientas de mano y artículos de ferretería.": 251,
      "Elaboración de productos de tabaco.": 252,
      "Fabricación de otros productos minerales no metálicos n.c.p.": 253,
      "Otras instalaciones para obras de construcción.": 254,
      "Fabricación de vehículos automotores.": 255,
      "Explotación de otras minas y canteras n.c.p.": 256,
      "Fabricación de bisutería y artículos conexos.": 257,
      "Fundición de hierro y acero.": 258,
      "Preparación del terreno.": 259,
      "Fabricación de cables de fibra óptica.": 260,
      "Fabricación de bicicletas y de sillas de ruedas para inválidos.": 261,
      "Publicación de periódicos, diarios y revistas.": 262,
      "Fabricación de partes y piezas de carpintería para edificios y construcciones.": 263
    },
    "provincia_desc": {
      "PICHINCHA": 1,
      "MANABÍ": 3,
      "AZUAY": 4,
      "EL ORO": 5,
      "LOS RÍOS": 6,
      "TUNGURAHUA": 7,
      "STO. DOMINGO DE LOS TSÁCHILAS": 8,
      "IMBABURA": 9,
      "LOJA": 10,
      "ESMERALDAS": 11,
      "CHIMBORAZO": 12,
      "SANTA ELENA": 13,
      "COTOPAXI": 14,
      "ORELLANA": 15,
      "SUCUMBÍOS": 16,
      "CAÑAR": 17,
      "CARCHI": 18,
      "BOLÍVAR": 19,
      "ZAMORA CHINCHIPE": 20,
      "MORONA SANTIAGO": 21,
      "GALÁPAGOS": 22,
      "PASTAZA": 23,
      "NAPO": 24
    }
  }
  for (const key in props.ciuu_desc) {
    if (props.ciuu_desc.hasOwnProperty(key)) {
        
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const comboBox = document.getElementById("ciuu-desc-select");
        // Loop through all keys and values in the object
        for (const key in props.ciuu_desc) {
            if (props.ciuu_desc.hasOwnProperty(key)) {
                const option = document.createElement("option");
                option.value = props.ciuu_desc[key];
                option.textContent = key;
                comboBox.appendChild(option);
            }
        }
    const comboBoxProvincia = document.getElementById("provincia-select");
        for (const key in props.provincia_desc) {
            if (props.provincia_desc.hasOwnProperty(key)) {
                const option = document.createElement("option");
                option.value = props.provincia_desc[key];
                option.textContent = key;
                comboBoxProvincia.appendChild(option);
            }
        }
    
    const comboBoxServicio = document.getElementById("tipo-empresa-select");
        for (const key in props.tipo_establecimiento) {
            if (props.tipo_establecimiento.hasOwnProperty(key)) {
                const option = document.createElement("option");
                option.value = props.tipo_establecimiento[key];
                option.textContent = key;
                comboBoxServicio.appendChild(option);
            }
        }
});


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('api-form');
    const resultadoValor = document.getElementById('resultado-valor');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtener los valores de las variables del formulario
        const var1 = parseFloat(document.getElementById('tipo-empresa-select').value);
        const var2 = parseFloat(document.getElementById('provincia-select').value);
        const var3 = parseFloat(document.getElementById('ciuu-desc-select').value);
        const var4 = parseFloat(document.getElementById('var4').value);
        const var5 = parseFloat(document.getElementById('var5').value);

        console.log(var1,var2,var3, var4,var5);
        // Crear un objeto JSON con los datos
        const data = {
            tipo_establecimiento: var1,
            provincia_desc: var2,
            ciiu_desc: var3,
            personal_ocupado: var4,
            ventas: var5
        };

        // Realizar la solicitud POST a la API
        fetch('http://localhost:55000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            // Mostrar el resultado en la página
            resultadoValor.textContent = `$ ${data.resultado.toFixed(2)}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});


# Sistema de Gestión de Animales en Corrales

Este es un aplicativo web desarrollado con arquitectura orientada a servicios y/o microservicios, diseñado para gestionar la asociación de animales en corrales en una granja.

## Funcionalidades

1. **Crear Corrales**  
   Permite crear corrales con un limite de animales que pueden estar en este.

2. **Crear Animales**  
   Permite crear animales para añadir en los corrales.

3. **Crear Restricciones de Asociación**  
   Crea restricciones en los corrales.

4. **Visualización de Animales en Corrales**  
   Ofrece una interfaz en la cual tener una vista de los animales en los corrales. 

. **Promedio de Edad de Animales**  
   Calcula cual es la edad media de los animales que estan en un corral.

## Instalación y Ejecución

### Requisitos Previos

- Node.js y npm instalados en tu máquina.
- Git para clonar el repositorio.

### Clonar el Repositorio

```bash
git clone  https://github.com/jhonfabernorena/PRUEBA-TECNICA-DESARROLLADOR-JUNIOR-2024.git
cd PRUEBA-TECNICA-DESARROLLADOR-JUNIOR-2024
>

Configuración del Backend
1.	Navega a la carpeta del backend:

cd backend
2.	Instala las dependencias:

npm install

3.	Configura las variables de entorno necesarias 

      POSTGRES_USER="default"
      POSTGRES_HOST="ep-square-math-a4pm82ns-pooler.us-east-1.aws.neon.tech"
      POSTGRES_PASSWORD="k03KSsGAIcfz"
      POSTGRES_DATABASE="verceldb"


4.	Inicia el servidor del backend:

npm start

5. Acceder al swagger

para acceder a el swagger con todos los endpoints debes acceder a esta ruta tras ejecutar el proyecto http://localhost:3000/api#/

Configuración del Frontend

1.	Navega a la carpeta del frontend:

cd frontend

2.	Instala las dependencias:

npm install

3.	Inicia el servidor del frontend:

npm start

o en el directorio principal ejecutar:

npm install
npm run start

4.	Abre tu navegador y accede a http://localhost:4200 para ver la aplicación en funcionamiento.

1.	Crear Corrales y Animales: Utiliza las interfaces proporcionadas para agregar nuevos corrales y animales.
2.	Definir Restricciones: Configura las restricciones de asociación para los animales.
3.	Visualizar Animales: Selecciona un corral desde el combo para ver los animales asociados en la tabla.
4.	Generar Resumen: Accede al endpoint correspondiente para obtener el resumen de animales y verificar aquellos de alta peligrosidad.
5.	Calcular Promedio de Edad: Utiliza el endpoint adecuado para obtener el promedio de edad de los animales en un corral.

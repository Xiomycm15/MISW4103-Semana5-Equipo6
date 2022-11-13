# MISW4103-Semana5-Equipo6
Entrega de la Semana 5: Pruebas E2E

## Funcionalidades bajo prueba
- Iniciar sesión: En esta funcionalidad se prueban escenarios relacionados con iniciar sesión correctamente y navegar a otras partes de la aplicación.

- Editar Cuenta Administrador: En esta funcionalidad se integraron los escenarios positivos y negativos correspondientes a la edición del perfil de una cuenta de administrador. 

- Creación de Post: En esta funcionalidad se probaron escenarios relacionados con la creación de post y su presencia en la listas de drafts, scheduled y published. 

- Creación de Tags: En esta funcionalidad se probaron escenarios de la creación de tags para post.

- Creación de Members: En esta funcionalidad se prueba la correcta creación de members.

## Pasos para ejecutar las pruebas
### Kraken
1. Iniciar Ghost localmente y comprobar que se haya lanzado en el URL http://localhost:2368/ghost/. Si se abre en otro puerto, se debe modificar el URL en cada prueba.
2. Si no se tiene una cuenta local de Ghost, se debe crearla.
3. Actualizar las credenciales de Ghost en kraken/features/properties.json con las credenciales de la cuenta local.
4. Correr las pruebas con Kraken.

## Escenarios de prueba
### Kraken
#### 1
Se inicia sesión y se entra al sitio de blog.
#### 2
Se inicia sesión y se entra a la página de posts.
#### 3
Se inicia sesión y se entra a la sección de páginas.
#### 4
Se inicia sesión y se entra a la sección de tags.
#### 5
Se inicia sesión y se entra a la página de members.
#### 6
Se inicia sesión y se crea un post con título "Título."
#### 7

| Escenario ID | Funcionalidad  | Condiciones Iniciales     | Descripción                                    | Steps to Reproduce   |Resultados Esperados|Tipo de Prueba| 
|--------------|----------------|---------------------------|------------------------------------------------|----------------------|--------------------|--------------|
| 1            | Iniciar sesión | Tener una cuenta de Ghost | Se inicia sesión y se entra al sitio de blog.  |   Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 7 seconds
  And I click on view site | Se inicia sesión correctamente y se entra al sitio de blog. | Positiva, caja negra. |

#### 8

#### 9

#### 10

#### 11

#### 12

#### 13

#### 14

#### 15

#### 16

#### 17

#### 18

#### 19

#### 20

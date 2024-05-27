<p style="font-size: 18px">
Universidad de San Carlos de Guatemala
<br>
Facultad de Ingeniería
<br>
Escuela de Ciencias y Sistemas
<br>
Análisis y Diseño 2
<br>
Catedrático: Juan Carlos Maeda Juarez
<br>
Auxiliar: Leonel Aguilar
<br>
Sección A
</p>

<br><br><br><br>

<h1 align="center" style="font-size: 40px; font-weight: bold;">Manual Técnico</h1>

<br><br><br><br>

<h4 align="center" style="font-size: 30px; font-weight: bold;">Grupo #01</h4>

<br><br>

<div align="center">

|  Carnet   |               Nombre                |
| :-------: | :---------------------------------: |
| 201801351 |    ELMER GUSTAVO SÁNCHEZ GARCÍA     |
| 201612282 | HEIDY CAROLINA CASTELLANOS DE LEÓN  |
| 201709166 | JACKELINE ALEXANDRA BENITEZ BENITEZ |
| 201612443 |     DANIEL ALBERTO MÉNDEZ DÍAZ      |
| 201612185 |    BYRON ANTONIO ALVAREZ MORALES    |

</div>

<br><br>

<h4 align="center" style="font-size: 18px; font-weight: bold;">Guatemala 2022</h4>

---

<h1>Tabla de Contenido</h1>

-   [**Comandos**](#comandos)
-   [**Información de Endpoints**](#información-de-endpoints)
    -   [**_1. Registro_**](#1-registro)
    -   [**_2. Registro con tarjeta_**](#2-registro-con-tarjeta)
    -   [**_3. Login_**](#3-login)
    -   [**_4. Obtener usuario jwt_**](#4-obtener-usuario-jwt)
-   [**Pruebas Unitarias**](#pruebas-unitarias)

<br>
# **Comandos**

### `npm run coverage`

### `npm start`

### `npm run test`

# **Información de endpoints**

## **_1. Registro_**

-   **Petición:** POST
-   **URL:** /auth/registro
-   **Backend** AUTH

```json
{
    "nombres": "Daniel Alberto",
    "apellidos": "Méndez Díaz",
    "fecha": "22/05/1997",
    "username": "danielss",
    "correo": "aegons@gmail.com",
    "password": "danmz",
    "gravatar": "https://hi.png"
}
```

Respuesta:

```json
{
    "err": false,
    "msg": "Usuario creados exitosamente",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoiZGFubXoiLCJub21icmVzIjoiRGFuaWVsIEFsYmVydG8iLCJhcGVsbGlkb3MiOiJNw6luZGV6IETDrWF6IiwiZmVjaGEiOiIyMi8wNS8xOTk3IiwiY29ycmVvIjoiYWVnb25zc2FzYkBnbWFpbC5jb20iLCJzdXNjcmlwY2lvbiI6MCwiZ3JhdmF0YXIiOiJodHRwczovL2hpLnBuZyIsImlhdCI6MTY1NDYzNzE1MiwiZXhwIjoxNjU0NzIzNTUyfQ.EAhW9ikHuJg6phtXv2DrvCxuGALaUzZBYizcLgLKw0c"
}
```

## **_2. Registro con tarjeta_**

-   **Petición:** POST
-   **URL:** /auth/registro
-   **Backend** AUTH

```json
{
    "nombres": "Daniel Alberto",
    "apellidos": "Méndez Díaz",
    "fecha": "22/05/1997",
    "username": "aegosn",
    "correo": "aegossn@gmail.com",
    "password": "danmz",
    "gravatar": "https://hi.png",
    "tarjeta": {
        "numero": "2208 20117 0101 1925",
        "cvv": "117",
        "exp_date": "06/2022"
    }
}
```

Respuesta:

```json
{
    "err": false,
    "msg": "Usuario y Tarjeta asociada creados exitosamente",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtYXJpdG8iLCJub21icmVzIjoiTWFyaW8gVHVuIiwiYXBlbGxpZG9zIjoiR3V6bWFuIExvZXJhIiwiZmVjaGEiOiIwMi8wNi8xOTY4IiwiY29ycmVvIjoibWFyaXRvQGdtYWlsLmNvbSIsInN1c2NyaXBjaW9uIjowLCJncmF2YXRhciI6Imh0dHBzOi8vaGltYXJpby5wbmciLCJpYXQiOjE2NTQ2Mzg0MTQsImV4cCI6MTY1NDcyNDgxNH0.umc6alrXum1Y2BUSuXJhVSU0WhnDYtdQadC2zzC3uLg"
}
```

## **_3. Login_**

-   **Petición:** POST
-   **URL:** /auth/login
-   **Backend** AUTH

```json
{
    "username": "marito",
    "password": "marzon"
}
```

Respuesta:

```json
{
    "err": false,
    "msg": "Credenciales Validas",
    "data": {
        "id": 1,
        "username": "marito",
        "nombres": "Mario Tun",
        "apellidos": "Guzman Loera",
        "fecha": "02/06/1968",
        "correo": "marito@gmail.com",
        "suscripcion": 0,
        "gravatar": "https://himario.png"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtYXJpdG8iLCJub21icmVzIjoiTWFyaW8gVHVuIiwiYXBlbGxpZG9zIjoiR3V6bWFuIExvZXJhIiwiZmVjaGEiOiIwMi8wNi8xOTY4IiwiY29ycmVvIjoibWFyaXRvQGdtYWlsLmNvbSIsInN1c2NyaXBjaW9uIjowLCJncmF2YXRhciI6Imh0dHBzOi8vaGltYXJpby5wbmciLCJpYXQiOjE2NTQ2NDEwOTIsImV4cCI6MTY1NDcyNzQ5Mn0.Xlsmzaa6xsPzb17JMknpbPhciFbDQGYC2NOr3jHLrWk"
}
```

## **_4. Obtener usuario jwt_**

-   **Petición:** POST
-   **URL:** /auth/get_user_login
-   **Backend** AUTH

Body vacio:

```json
{}
```

Auth Bearer:

```txt
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJkYW5teiIsIm5vbWJyZXMiOiJEYW5pZWwgQWxiZXJ0byIsImFwZWxsaWRvcyI6Ik3DqW5kZXogRMOtYXoiLCJmZWNoYSI6IjIyLzA1LzE5OTciLCJjb3JyZW8iOiJhZWdvbnNzYXNiQGdtYWlsLmNvbSIsInN1c2NyaXBjaW9uIjowLCJncmF2YXRhciI6Imh0dHBzOi8vaGkucG5nIiwiaWF0IjoxNjU0NjQxMTUwLCJleHAiOjE2NTQ3Mjc1NTB9.gHCgkeJ3u6f5iw0AHgFJSgR-iz1_O91iYk89LkCBl18
```

Respuesta:

```json
{
    "err": false,
    "data": {
        "id": 2,
        "username": "danmz",
        "nombres": "Daniel Alberto",
        "apellidos": "Méndez Díaz",
        "fecha": "22/05/1997",
        "correo": "aegonssasb@gmail.com",
        "suscripcion": 0,
        "gravatar": "https://hi.png"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJkYW5teiIsIm5vbWJyZXMiOiJEYW5pZWwgQWxiZXJ0byIsImFwZWxsaWRvcyI6Ik3DqW5kZXogRMOtYXoiLCJmZWNoYSI6IjIyLzA1LzE5OTciLCJjb3JyZW8iOiJhZWdvbnNzYXNiQGdtYWlsLmNvbSIsInN1c2NyaXBjaW9uIjowLCJncmF2YXRhciI6Imh0dHBzOi8vaGkucG5nIiwiaWF0IjoxNjU0NjQxMzUzLCJleHAiOjE2NTQ3Mjc3NTN9.dfvnVD0ovQuQr6UceftDVk9QPbfBV4DP7UZyHH7RUaI"
}
```

Respuesta con tarjeta:

```json
{
    "err": false,
    "data": {
        "id": 1,
        "username": "marito",
        "nombres": "Mario Tun",
        "apellidos": "Guzman Loera",
        "fecha": "02/06/1968",
        "correo": "marito@gmail.com",
        "suscripcion": 0,
        "gravatar": "https://himario.png",
        "tarjeta": {
            "id": 1,
            "numero": "*************1925",
            "cvv": "***",
            "exp_date": "06/2022",
            "balance": 5000,
            "id_usuario": 1
        }
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtYXJpdG8iLCJub21icmVzIjoiTWFyaW8gVHVuIiwiYXBlbGxpZG9zIjoiR3V6bWFuIExvZXJhIiwiZmVjaGEiOiIwMi8wNi8xOTY4IiwiY29ycmVvIjoibWFyaXRvQGdtYWlsLmNvbSIsInN1c2NyaXBjaW9uIjowLCJncmF2YXRhciI6Imh0dHBzOi8vaGltYXJpby5wbmciLCJpYXQiOjE2NTQ2NDE1MTQsImV4cCI6MTY1NDcyNzkxNH0.IyfROBvM2kF_b-V5faTO0a-XcfxmJm0Y0kPTIVbqiIU"
}
```

<br><br>

# _*Pruebas unitarias*_

## **_1.Testing Registrar Usuario_**

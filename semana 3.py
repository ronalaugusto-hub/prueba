#Sistema de acceso

usuario = input('Ingresa el nombre de usuario:')
rol = input('Ingresa el rol:'). lower()
estado = input('estado (activo/inactivo):'). lower()


'''
Reglas:
- Cuentas inactivas no pueden logearse
-Si las cuentas estan activas:
    admin - control total
    tecnico - Control sobre usuarios
    usuario - acceso limitado
    otro rol - no reconocido
- Se usará la función lower () para volver minusculas la cadena ingresada por el usuario.
'''

if estado == 'Inactivo':
    print('Acceso denegado')
    print('Solicite acceso al administrador')
elif rol == 'administrador':
    print ('Bienvenido', usuario)
    print('Acceso concedido')
    print('Rol:', rol)
    print('Permisos: Acceso total')
elif rol == 'tecnico':
    print ('Bienvenido', usuario)
    print('Acceso concedido')
    print('Rol:', rol)
    print('Permisos: \n Mantenimiento del sistema, acceso a usuarios')
elif rol == 'usuario':
    print ('Bienvenido', usuario)
    print('Acceso concedido')
    print('Rol:', rol)
    print('Permisos: Acceso limitado')
else:
    print('Acceso denegado')
    print('Rol desconocido')

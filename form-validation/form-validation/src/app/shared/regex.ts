// Letras (con tildes, ü y ñ) separadas por un solo espacio, sin espacios al principio ni al final
export const SOLO_LETRAS = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/;
// 9 dígitos que empiezan por 6, 7, 8 o 9, con +34 delante opcional (con o sin espacio)
export const TELEFONO = /^(\+34 ?)?[6-9]\d{8}$/;
// Como SOLO_LETRAS, pero las palabras pueden ir separadas por espacio o guion
export const NOMBRE_MASCOTA = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+([ -][a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/;
// Exactamente 15 dígitos
export const MICROCHIP = /^\d{15}$/;
// Al menos una minúscula, una mayúscula y un número, sin espacios (la longitud la controlan minLength/maxLength)
export const PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S+$/;

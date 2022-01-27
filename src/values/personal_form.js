const Fields = Object.freeze({
  Image: {
    title: 'Personal foto (Opcional)',
    subtitle: 'Sube tu foto (Formato JPG o PNG max 2MB)',
    changeImage: 'Cambiar Foto',
    defaultUrl: '/images/profile.png',
  },
  Name: {
    title: 'Nombre',
    placeholder: 'Nombre',
    rules: 'required',
  },
  LastName: {
    title: 'Apellidos',
    placeholder: 'Apellidos',
    rules: 'required',
  },
  Phone: {
    title: 'Teléfono',
    placeholder: '228 169 4542',
    rules: 'required',
  },
  Gender: {
    title: 'Genero',
    placeholder: 'Selecciona tu genero',
    rules: 'required',
    primary: 'code',
    label: 'title',
  },
  Email: {
    title: 'Email',
    placeholder: 'usuario@email.com',
    rules: 'required|email',
  },
  BirthDate: {
    title: 'Fecha de nacimiento',
    placeholder: 'DD/MM/AAAA',
    rules: 'required|regex:\\d\\d/\\d\\d/\\d\\d\\d\\d',
  },
  Address: {
    title: 'Dirección',
    placeholder: 'Ej. Valle del Paraiso, 54060 Tlalnepantla de Baz',
    rules: 'required',
  },
  Button: {
    title: 'Próximo',
  },
})

export default Fields

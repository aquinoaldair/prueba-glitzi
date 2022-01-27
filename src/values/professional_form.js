const Fields = Object.freeze({
  Area: {
    title: 'Área',
    placeholder: 'Seleccione su área',
    label: 'name',
    primary: 'id',
    rules: 'required',
  },
  Profession: {
    title: 'Profesión',
    placeholder: 'Seleccione su profesión',
    label: 'name',
    primary: 'id',
    rules: 'required',
  },
  Specialty: {
    title: 'Especialidad',
    placeholder: 'Seleccione sus especialidadees',
    label: 'name',
    primary: 'id',
    rules: 'required',
  },
  Zone: {
    title: 'Zona de atendimiento (Opcional)',
    placeholder: 'Ej. Santa Fé, Polanco y Jardines ',
    rules: '',
  },
  Description: {
    title: 'Descripción (Opcional)',
    placeholder: 'Describa tu trabajo aqui...',
    rules: '',
  },
  URL: {
    title: 'Mi URL',
    placeholder: '',
    rules: 'required',
  },
  Instagram: {
    title: 'Instagram (Opcional)',
    placeholder: 'https://instagram.com/usuario',
    rules: '',
    checkText: 'Importar fotos de instagram',
  },
  Button: {
    title: 'Finalizar',
  },
})

export default Fields

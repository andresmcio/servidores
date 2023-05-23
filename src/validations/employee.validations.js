function isValidEmployee(employee) {
    // Verificar que existan todos los campos requeridos
    const requiredFields = ['name', 'age', 'phone', 'privileges', 'favorites', 'finished', 'badges', 'points'];
    for (const field of requiredFields) {
      if (!(field in employee)) {
        return false;
      }
    }
  
    // Validar el formato del campo "phone"
    if (
      typeof employee.phone !== 'object' ||
      !('personal' in employee.phone) ||
      !('work' in employee.phone) ||
      !('ext' in employee.phone)
    ) {
      return false;
    }
  
    // const phoneFormat = /^\d{3}-\d{3}-\d{3}$/;
    // if (
    //   !phoneFormat.test(employee.phone.personal) ||
    //   !phoneFormat.test(employee.phone.work) ||
    //   !phoneFormat.test(employee.phone.ext)
    // ) {
    //   return false;
    // }
  
    // Validar que "age" sea un número
    if (typeof employee.age !== 'number') {
      return false;
    }
  
    // Validar que "name" esté capitalizado
    if (
      typeof employee.name !== 'string' ||
      employee.name.trim().length === 0 ||
      !/^[A-Z][a-z]*$/.test(employee.name)
    ) {
      return false;
    }
  
    // Verificar el campo "favorites" y asignar null si no se proporciona
    if (!('food' in employee.favorites)) {
      employee.favorites.food = null;
    }
    if (!('artist' in employee.favorites)) {
      employee.favorites.artist = null;
    }
  
    return true;
  }

    module.exports = isValidEmployee
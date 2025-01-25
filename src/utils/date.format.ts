export function formatDate(dateString: string): string {
    const date = new Date(dateString); // Crear un objeto Date
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Mes (1-12)
    const year = date.getFullYear(); // Año completo
    let hours = date.getHours(); // Hora en formato 24 horas
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Minutos
    const ampm = hours >= 12 ? 'PM' : 'AM'; // Determinar AM o PM
    
    // Convertir horas al formato 12 horas
    hours = hours % 12 || 12; // Si `hours % 12` es 0, cambiar a 12
  
    return `${month}/${year} ${hours}:${minutes}${ampm}`;
  }

 
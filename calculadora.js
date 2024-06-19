function calculateCosts() {
    // Obtener los valores de los campos de compra
    const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
    const purchaseInmobiliario = parseFloat(document.getElementById('purchaseInmobiliario').value);
    const purchaseEscribania = parseFloat(document.getElementById('purchaseEscribania').value);

    // Obtener los valores de los campos de venta
    const salePrice = parseFloat(document.getElementById('salePrice').value);
    const saleInmobiliario = parseFloat(document.getElementById('saleInmobiliario').value);
    const saleEscribania = parseFloat(document.getElementById('saleEscribania').value);

    // Calcular los costos totales de compra y venta
    
    const limpioVenta = salePrice*(1-(saleInmobiliario + saleEscribania)/100) ;
    const totalCompra = purchasePrice*(1+(purchaseInmobiliario + purchaseEscribania)/100);


    document.getElementById('results').innerHTML = `
        <h2><strong>Diferencia a pagar:</strong> U$S${(totalCompra - limpioVenta).toFixed(2)}</h2>
    `;
}

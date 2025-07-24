// components/ProductDetailsTable.jsx
import React from 'react';

const parseProductDetails = (description) => {
  const decoded = new DOMParser().parseFromString(description, 'text/html').documentElement.textContent;

  const fields = decoded.split(/(?<=\))\s*|(?=Product| Sheet Standard Thickness | Standard Size|Sheet Size|Thickness|Sheet Thickness|Thickness Tolerance|Finish)/g).filter(Boolean);

  return fields.map((entry) => {
    const [key, ...valParts] = entry.split(':');
    return {
      key: key.trim(),
      value: valParts.join(':').trim()
    };
  });
};

const ProductDetailsTable = ({ description }) => {
  const details = parseProductDetails(description);

  return (
    <div className="product-details-table">
      <table>
        <tbody>
          {details.map((item, index) => (
            <tr key={index}>
              <td style={{ fontWeight: 'bold', paddingRight: '10px' }}>{item.key}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetailsTable;

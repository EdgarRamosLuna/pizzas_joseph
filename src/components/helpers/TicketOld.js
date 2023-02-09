<div className="ticket">
<div className="header">
    <center>
      <b>Folio - {Number(dataMain['folio']) < 10 ? `00${dataMain['folio']}` : dataMain['folio']}</b>
    </center>
  </div>
  <br />
  <div className="table-container" style={{fontSize:'1em'}}>
    <table>
      <thead>
        <tr>
          <th>Cant.</th>
          <th style={{textAlign:'center'}}>Ingredientes & Tamaño</th>
        </tr>
      </thead>
      <tbody>
        {dataI.map((data, ind) => {
          return (
            <tr>
              <td className="p-cant">
                <div className="p-cant-cont">
                  <span>{data.cant}</span>
                </div>
              </td>

              <td className="p-name" style={{textAlign:'center'}}>
                {data.cat === "op" ? data.name : data.name}
                {data.cat === "drinks" ||  data.cat === "op" ? "" : <div>
                  -------
                </div>}
                
                {dataI2.map((data2, ind2) => {
                  if (
                    Number(data.id_item_sale) ===
                    Number(data2.id_item_sale)
                  ) {
                    return (
                      <>
                        <b style={{ fontSize: "1em" }}>
                          {data2.name}
                          {Number(data2.is_extra) === 1 ? <div>{data.exin}</div>:""}
                        </b>
                        
                      </>
                    );
                  }
                })}
                {data.cat === "op" ? (
                  ""
                ) : (
                  <>
                    {Number(data.orilla_relle) !== 0 ? (
                      <>
             
                        {Number(data.orilla_relle) === 1
                          ? <>
                          ORP <br />
                        </>
                          : <>
                          ORM <br />
                         </>}
                          <br />
                      </>
                    ) : (
                      ""
                    )}
                    {Number(data.queso_ex) !== 0 ? (
                      <>
                        <br />
                        -Queso Extra 
                      </>
                    ) : (
                      ""
                    )}
                    {Number(data.pastor) !== 0 ? (
                      <>
                        <br />
                        -Pastor 
                      </>
                    ) : (
                      ""
                    )}
                    {Number(data.deditos) !== 0 ? (
                      <>
                        <br />
                        -Deditos
                      </>
                    ) : (
                      ""
                    )}
                    
                    <br />
                  </>
                )}
              </td>
             
              
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  {/*  <div className="item-list">
    {dataI.map((data, ind) => {
      return (
        <div className="item">
          
          <span className="item-name">
          <div className="item-cant">
            {ind === 0 ? <span className="cant-txt">Cant</span>:""}
            
            
            <span>
            {data.cant}

            </span>
          </div>
          
            <div className="item-ing" >
            <div className="item-name-value">
              {data.name} <br />
              
            </div>
              {dataI2.map((data2, ind2) => {
                if (
                  Number(data.id_item_sale) ===
                  Number(data2.id_item_sale)
                ) {
                  return (
                    <>
                      <b style={{ fontSize: "0.85em" }}>{data2.name}</b>
                      <br />
                    </>
                  );
                }
              })}
            </div>
          </span>
          <span className="item-price">
            ${(Number(data.price) * Number(data.cant)).toFixed(2)}
          </span>
        </div>
      );
    })}
  </div>*/}
 
  <div className="footer">
    <div
      className="total"
      style={{ borderBottom: "1px dashed", paddingBottom: "3px" }}
    >
      <span className="total-label">Total:</span>
      <span className="total-amount">
        ${(Number(dataMain.total) + Number(dataMain.envio)).toFixed(2)}
      </span>
    </div>
    <br />
    <b>
      <span className="date">{formattedDate}</span>
    </b>
  </div>
</div>
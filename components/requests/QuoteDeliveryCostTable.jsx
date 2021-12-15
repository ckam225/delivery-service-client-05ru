

const QuoteDeliveryCostTable = ({quotes=[]}) => {
    return <table>
         <thead>
            <tr>
                <th>Компания доставки</th>
                <th>Стоимость доставки</th>
                <th>Фактическая дата забора</th>
                <th>Фактическая дата отправления</th>
                <th>Фактическая дата доставки</th>
                <th>Фактический срок доставки в днях</th>
                <th>Создан</th>
            </tr>
        </thead>
        <tbody>
            {quotes.length > 0 ? 
             quotes.map(quote => <tr key={quote.id}>
                <td>{quote.deliver.name}</td>
                <td>{quote.delivery_cost}</td>
                <td>{quote.fact_pickup_date}</td>
                <td>{quote.fact_dispatch_date}</td>
                <td>{quote.fact_delivery_date}</td>
                <td>{quote.fact_delivery_days}</td>
                <td>{quote.created_at}</td>
             </tr>):
             <tr>
                 <td colSpan="7" className="text-center" >No propositions available</td>
             </tr>
            }
        </tbody>
       
    </table>
}
 
export default QuoteDeliveryCostTable;
import GoodTableItem from "./GoodTableItem";


const GoodTable = ({goods =[]}) => {
    return <table>
    <thead>
        <tr>
            <th>Уникальный индентификатор</th>
            <th>Тип упаковки</th>
            <th>Вес</th>
            <th>Ширина</th>
            <th>Высота</th>
            <th>Длина</th>
            <th>Объем</th>
            <th>Хрупкое</th>
            <th>Температурный режим</th>
            <th>Стоимость</th>
            {/* <th>Запрос</th> */}
            <th>Посылка</th>
        </tr>
    </thead>
    <tbody>
        {goods.length > 0 ? goods.map(good => <GoodTableItem good={good} key={good.id} />) : <tr>
            <td colSpan="11" className="text-center">No goods available</td>
        </tr>}
    </tbody>
</table>
}
 
export default GoodTable;
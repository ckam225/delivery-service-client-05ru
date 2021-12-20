

const DeliverGridItem = ({deliver, onClick}) => {
    return <div key={deliver.id} onClick={()=>onClick(deliver)} style={{curson: 'pointer'}}
     className="border rounded-lg border-primary">
    <div className="p-2 text-center border-b">{deliver.name}</div>
    <p className="text-xs">{deliver.description}</p>
    <h1 className="text-sm text-center text-slate-500">Доступные типы доставки</h1>
    <div className="flex">
        {deliver.delivery_types.map(dt => <div key={dt.id} className="p-1 m-1 bg-primary text-white" style={{fontSize: '10px'}}>
          {dt.name}
        </div>)}
    </div>
    <h1 className="text-sm text-center text-slate-500">Вид транспортировки</h1>
    <div className="flex">
        {deliver.transport_types.map(dt => <div key={dt.id} className="p-1 m-1 bg-primary text-white" style={{fontSize: '10px'}}>
            {dt.name}
        </div>)}
    </div>
</div>
}
 
export default DeliverGridItem;
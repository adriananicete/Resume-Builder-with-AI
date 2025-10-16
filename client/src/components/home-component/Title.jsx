function Title({ title, description }) {
    return ( 
        <div className="text-center mt-6 text-slate-700">
            <h2 className="xl:text-[45px] font-[500]">{title}</h2>
            <p className="max-sm max-w-2xl mt-4 text-slate-500">{description}</p>
        </div>
     );
}

export default Title;
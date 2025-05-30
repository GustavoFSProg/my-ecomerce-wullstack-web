import { PedidoEntrega } from '../../../core'

export interface FormularioEntregaProps {
    entrega: Partial<PedidoEntrega>
    entregaMudou: (entrega: Partial<PedidoEntrega>) => void
    className?: string
}

export default function FormularioEntrega(props: FormularioEntregaProps) {
    const { entrega, entregaMudou } = props

    function alterarAtributo(atributo: string) {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            entregaMudou({ ...entrega, [atributo]: e.target.value })
        }
    }

    return (
        <div className={`flex 
            max-md:-ml-5
        max-md:w-[300px]
        flex-col gap-3 ${props.className ?? ''}`}>
            <span className="px-7 pb-2 text-xl font-bold text-white/70">
                Dados da Entrega
            </span>
            <div className="flex flex-col gap-5
             bg-violet-dark/50
             
             rounded-xl p-6">
             <span className="-mb-4 text-[14px] ml-2">Nome:</span>
                <input
                    placeholder="Nome Completo"
                    value={entrega.nome}
                    onChange={alterarAtributo('nome')}
                    className="input"
                />
              
              <div className="flex  max-md:flex-col gap-5">
              <div className="flex flex-col max-md:flex-col gap-5">
                <span className="-mb-4 ml-2 text-[14px]">Email:</span>
                    <input
                        placeholder="E-mail"
                        value={entrega.email}
                        onChange={alterarAtributo('email')}
                        className="input  flex-1"
                    />
                        
                    </div>
              <div className="flex flex-col max-md:flex-col gap-5">

                <span className="-mb-4 ml-2 text-[14px]">CEP:</span>

                     <input
                        placeholder="CEP"
                        // value={entrega.cep}
                        onChange={alterarAtributo('cep')}
                        className="input flex-1"
                    />
                    </div>
              <div className="flex flex-col max-md:flex-col gap-5">

                <span className="-mb-4 ml-2 text-[14px]">CPF:</span>

                    <input
                        placeholder="CPF"
                        value={entrega.cpf}
                        onChange={alterarAtributo('cpf')}
                        className="input flex-1"
                    />
                </div>
                </div>
                <div className="flex  max-md:flex-col gap-5">
              <div className="flex flex-col max-md:flex-col gap-5">
              <span className="-mb-4  ml-2 text-[14px]">Logradouro:</span>

                    <input
                        placeholder="Logradouro"
                        value={entrega.logradouro}
                        onChange={alterarAtributo('logradouro')}
                        className="input flex-1"
                    />
                </div>
                <div className="flex flex-col max-md:flex-col gap-5">
              <span className="-mb-4  ml-2 text-[14px]">Complemento:</span>

                    <input
                        placeholder="Complemento"
                        value={entrega.complemento}
                        onChange={alterarAtributo('complemento')}
                        className="input"
                    />
                </div>
                </div>
                <div className="flex max-md:flex-col gap-5">
                <div className="flex flex-col max-md:flex-col gap-5">
              <span className="-mb-4  ml-2 text-[14px]">Cidade:</span>

                    <input
                        placeholder="Cidade"
                        value={entrega.cidade}
                        onChange={alterarAtributo('cidade')}
                        className="input flex-1"
                    />
                </div>
                {/* <div className="flex flex-col max-md:flex-col gap-5">
              <span className="-mb-4  ml-2 text-[14px]">Senha:</span>

                    <input
                        
                        type="password"
                        value={entrega.password}
                        onChange={alterarAtributo('password')}
                        className="input flex-1"
                    />
                </div> */}
                <div className="flex flex-col max-md:flex-col gap-5">
              <span className="-mb-4  ml-2 text-[14px]">Estado:</span>

                    <input
                        placeholder="Estado"
                        value={entrega.estado}
                        onChange={alterarAtributo('estado')}
                        className="input flex-1"
                    />
                </div>
            
                </div>
            </div>
        </div>
    )
}

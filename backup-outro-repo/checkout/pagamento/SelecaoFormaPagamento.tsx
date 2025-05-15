import { useRef, useState } from "react";
import { FormaPagamento } from "../../../core";
import { useReactToPrint } from "react-to-print";
import pdf from "@/app/(paginas)/pdf";
import Link from "next/link";
import Page from "@/app/(paginas)/pdf/page";

const documentos = Array(50)
  .fill(` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   Nullam placerat lacus a augue blandit, vel vehicula ligula ullamcorper.
    Cras bibendum rhoncus efficitur. Ut lacus elit, sodales sit amet ipsum id,
     suscipit semper libero. Curabitur malesuada commodo lectus, 
     tincidunt venenatis felis vestibulum eget.
   Vivamus vitae vulputate sem. Nunc euismod elementum vulputate.
    Nunc sed nibh est.`);


export interface SelecaoFormaPagamentoProps {
  formaPagamento?: FormaPagamento;
  formaPagamentoMudou?: (value: FormaPagamento) => void;
  className?: string;
}

export default function SelecaoFormaPagamento(
  props: SelecaoFormaPagamentoProps
) {
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
// const documento = 'Alex Zanardi'

  function renderizarItem(label: string, tipo: FormaPagamento) {
    const selecionado = props.formaPagamento === tipo;
    return (
      <button
      style={{zIndex: 1}}
        className="flex w-[500px] items-center gap-3 bg-violet-dark rounded-lg h-12 px-7"
        onClick={() => props.formaPagamentoMudou?.(tipo)}
      >
        <span
          className={`
                        ${
                          selecionado
                            ? "bg-emerald-500 border-emerald-500"
                            : "bg-transparent border-white"
                        }
                        w-5 h-5 border-2 rounded-full
                    `}
        ></span>
        <span>{label}</span>
      </button>
    );
  }

  return (
    <div className={`flex flex-col gap-3 ${props.className ?? ""}`}>
      <span className="px-7 pb-2 text-xl font-bold text-white/70">
        Forma de Pagamento
      </span>
      <div className="flex  flex-col gap-3">
        <div className="flex items-center w-[900px]">
          {renderizarItem(
            "Pagamento no PIX: _______ FG4@gmail.com",
            FormaPagamento.PIX
          )}
          <button
            className="button max-md:pt-[10px]
                 max-md:pb-3
                 max-md:h-auto
                 ml-5
                 bg-indigo-700"
          >
            Efetuar o Pagamento
          </button>
        </div>
        <div className="flex items-center w-[900px]">
        {renderizarItem("Boleto Bancário", FormaPagamento.BOLETO)}

        <Link 
          className="button max-md:pt-[10px]
          max-md:pb-3
          max-md:h-auto
          
          ml-5
          bg-indigo-700"
          
          href="/pdf" >
          Gerar Boleto
        </Link>
          </div>
     
      

        <div className="flex items-center w-[900px]">
        {renderizarItem("Cartão de Crédito", FormaPagamento.CARTAO)}

          <button
            className="button max-md:pt-[10px]
                 max-md:pb-3
                 max-md:h-auto
                 ml-5
                 bg-indigo-700"
          >
            Efetuar o Pagamento
          </button>
        </div>

      </div>
      
    </div>
  );
}

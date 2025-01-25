import { useState } from "react";
import { comment, product } from "../../../models";
import { IoSend } from "react-icons/io5";
import { useUserStore } from "../../../store/UserStore";
import { formatDate } from "../../../utils/date.format";
import { useLocalStorage } from "../customHooks/UseLocalStorage";
import { commentsDB } from "../../../bd";
import { toast } from "sonner";

type Props = {
  idProduct: product["id"];
};

const createRandomId = () => Number(`${Date.now()}${Math.floor(Math.random() * 1000)}`);

export const Comments = ({ idProduct }: Props) => {
  const [text, setText] = useState('')
  const email = useUserStore((state)=>state.email)
  const username = useUserStore((state)=>state.username)
  const [allComments, setAllComments] = useLocalStorage<comment[]>("comments", commentsDB);

  // Filtramos comentarios específicos al producto
  const comments = allComments.filter((comment) => comment.fkProduct === idProduct);
 
    

 const createCommentOfProduct = (idProduct:product['id']) =>{
    if(email.length === 0 ) return toast.warning('Debes hacer login para comentar')
    if(text.trim() === '') return toast.warning('Escribe algo para comentar')  

   const newComment:comment = {
    id:createRandomId(),
    byEmail: email, 
    byName:username ,
    date:new Date().toISOString(),
    fkProduct:idProduct, 
    text:text

  }   
   
  setAllComments([...allComments,newComment])
  setText('') 
     
 }

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold">Reseñas</h2>
      <div>
        <section className="grid gap-2">
            <p className="text-sm text-secondary-bold">Deja un comentario acerca del producto:</p>
            <div className="bg-light  rounded-xl flex gap-2 justify-center items-center p-3">
                <input value={text} onChange={(e)=>setText(e.target.value)}  className="w-full outline-none bg-transparent" placeholder="estaba muy bonito . . ." type="text" />
                <div onClick={()=>createCommentOfProduct(idProduct)} className="flex gap-1 text-sm group hover:text-red cursor-pointer items-center">
                    enviar
                <IoSend className="group-hover:text-red" />
                </div>
            </div>
        </section>
        {comments.map((comment) => {
          return (
            <div key={comment.id} className="p-3 grid gap-3">
                <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
             <div>
                
              <h3 className="text-xl font-medium">{comment.byName}</h3>
              <p className="text-xs text-red">{comment.byEmail}</p>
             </div>
             <div>
                <p className="text-xs text-secondary-bold">{formatDate(comment.date) }</p>
             </div>
                </div>
              <p className="text-sm">{comment.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

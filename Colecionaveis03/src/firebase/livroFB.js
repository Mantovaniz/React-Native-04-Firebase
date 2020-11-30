import { conexaoFS } from './conexaoFB';

export class LivroFB{
    state={
        colecao: conexaoFS.collection('ColecionaveisFirestore/itens/livros')
    };
    pegarColecao(){
        return this.state.colecao;
    }

    adicionarLivro(livro){
        this.state.colecao.add(livro);
    }

    editarLivro(livro){
        const{id} = livro;
        delete livro.id;

        this.state.colecao.doc(id).update(livro );
    }

    removerLivro(livro){
        this.state.colecao.doc(livro.id).delete();
    }

}
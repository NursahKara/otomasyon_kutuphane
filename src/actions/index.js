export const SELECTBOOK ='select_book';
export const DESELECTBOOK ='deselect_book';
export const selectBook =(book) => {
    return {
        type : SELECTBOOK,
        payload : book
    }
}
export const deselectBook=() =>{
    return{
        type : DESELECTBOOK,
        payload : {}
    }
}
//actionlarda returnun 2 tipi var
//type:actionin tipi ne. reducer la eslestirebilmek  icin
//payload: bu action uzerinde ne tasiyacak
//deselect kitabı silecegi icin bos parametresi bos, payloadi bos. payload olmasa da olurdu
int nextry(int q_count, int* q){
    int n=0;
    int *cont_S=(int*)malloc(q_count*sizeof(int));
    int *vet=(int*)malloc(q_count*sizeof(int));
    for(int i=0;i<q_count;i++){
        vet[i]=i+1;
        cont_S[i]=0;
    }
    for(int i=0;i<q_count;i++){
        if(q[i]-(i+1)+cont_S[q[i]-1]>2){
            //printf("Too chaotic\n");
            return -1;
        }else if(q[i]-(i+1)+cont_S[q[i]-1]>0) {
            if(q[i]-(i+1)+cont_S[q[i]-1]==1){
                swap(i,i+1,vet);
                cont_S[vet[i+1]-1]++;
                n++;
            }
            if(q[i]-(i+1)+cont_S[q[i]-1]==2){
                swap(i+1,i+2,vet);
                swap(i,i+1,vet);
                cont_S[vet[i+1]-1]++;
                cont_S[vet[i+2]-1]++;
                n=n+2;
                //n++;
            }
        }
            
    }
    return n;
}  

int next(int q_count, int* q){
    int n=0;
    int *cont_swap = ( int*)malloc(q_count*sizeof(int));
    int *correct_pos = (int*)malloc(q_count*sizeof(int));
    void populate() {
        for(int i=0;i<q_count;i++){
            correct_pos[i]=i+1;
            cont_swap[i]=0;
        }
    }
    int get_index(int pos) {
        return pos - 1;
    }
    populate();

    for(int i=0;i<q_count;i++){
        int offset(){
            return q[i]-(i+1);
        }
        int swap_val() {
            return cont_swap[get_index(q[i])];
        }
        int calc(){
            return offset() + swap_val();
        }
        if(calc()>2){
            //printf("Too chaotic\n");
            return -1;
        }else if(calc()>0) {
            if(calc()==1){
                swap(i,i+1,correct_pos);
                cont_swap[correct_pos[i+1]-1]++;
                n++;
            }
            if(calc()==2){
                swap(i+1,i+2,correct_pos);
                swap(i,i+1,correct_pos);
                cont_swap[correct_pos[i+1]-1]++;
                cont_swap[correct_pos[i+2]-1]++;
                n=n+2;
                //n++;
            }
        }
            
    }
    return n;
}  
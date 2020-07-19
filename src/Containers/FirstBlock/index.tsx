import React , {Component} from 'react';
import './style.sass'

interface IState {
    selected : number;
}
export default class InfoContainer extends Component<{},IState> {

    constructor(props : {}){
        super(props);
        this.state = {selected : 1}
    }

    handleSelected = (selected : number) => {
        this.setState({selected});
    }

    render(){
        const selected = 'types__category--selected';
        return (
            <div className="categories">
                <div className="categories types">
                    <div onClick={()=>{
                        this.handleSelected(0);
                    }} className={`types__category ${this.state.selected === 0 ? selected : ''}`}>
                        <img className="types__category-icon" src="/icons/responsive.png" alt=""/>
                        <h3 className="types__category-desc">Responsive <br/> Websites</h3>
                    </div>
                    <div onClick={()=>{
                        this.handleSelected(1);
                    }} className={`types__category ${this.state.selected === 1 ? selected : ''}`}>
                        <img className="types__category-icon" src="/icons/e-comerce.png" alt=""/>
                        <h3 className="types__category-desc">e Commerce <br/> Websites</h3>
                    </div>
                    <div onClick={()=>{
                        this.handleSelected(2);
                    }} className={`types__category ${this.state.selected === 2 ? selected : ''}`}>
                        <img className="types__category-icon" src="/icons/blog.png" alt=""/>
                        <h3 className="types__category-desc">Daily blog <br/> Websites</h3>
                    </div>
                    <div onClick={()=>{
                        this.handleSelected(3);
                    }} className={`types__category ${this.state.selected === 3 ? selected : ''}`}>
                        <img className="types__category-icon" src="/icons/search.png" alt=""/>
                        <h3 className="types__category-desc">Search based <br/> Websites</h3>
                    </div>
                </div>
                <div className="categories content">
                    <img className="content__image" src="/img/ipad.png" alt=""/>
                    <h4>Lorem ipsum, dolor sit amet</h4>
                    <p className="content__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, illo aut soluta corrupti velit doloribus illum modi, hic sint molestiae quisquam neque et dolorem inventore nihil molestias earum. Eum facilis placeat ullam numquam in, hic est quis quam, possimus commodi ipsam similique sit veritatis ab inventore temporibus nihil architecto laborum id doloribus labore! Autem laudantium quaerat vel mollitia numquam rem iure obcaecati doloremque velit quasi quisquam ut dolore facilis, fugiat quod magnam minus quibusdam! Rem possimus perspiciatis sed nihil explicabo ratione minus cupiditate quae quidem. Incidunt impedit similique nobis consectetur inventore corrupti nostrum quod natus doloremque fugiat, facere totam ducimus.</p>
                    <p className="content__text">Quas architecto cum aliquam perferendis incidunt voluptates facere praesentium autem mollitia ut! Aut sunt eum possimus sit, maxime esse minus tenetur cupiditate? Voluptas atque possimus eveniet obcaecati alias enim est totam, tempora impedit architecto aspernatur iste? Labore non quod aliquid recusandae. Voluptatum molestias id fugit iste distinctio natus adipisci reprehenderit enim nihil, saepe culpa! Earum iure minima mollitia odit explicabo libero blanditiis ducimus ipsa assumenda? Cum repudiandae sed delectus quas iusto minus tenetur aliquam nisi temporibus consequatur, provident quia laborum qui eius ratione aspernatur accusamus cupiditate ut ad nesciunt! Inventore natus eaque aliquid quasi sint laudantium repellendus veritatis nam minima!</p>
                    <p className="content__text">Eligendi vero eveniet nihil perspiciatis exercitationem unde consequatur enim dignissimos? Labore aliquid praesentium, harum, odio perspiciatis aut hic architecto beatae aperiam neque explicabo vero eos non porro perferendis eum tempore expedita quibusdam maxime omnis ad provident culpa modi ea? Cumque porro, deserunt ea pariatur soluta, assumenda possimus accusamus eius distinctio libero, officiis unde quidem eum necessitatibus repellendus labore aperiam exercitationem impedit quas officia aut placeat. Nulla debitis, praesentium enim illo quidem quisquam obcaecati vero eveniet eligendi, odio est animi nam recusandae tenetur. Laudantium accusantium odio autem officiis cum tenetur iusto aliquid aut deserunt veritatis! Quo, incidunt. Maiores enim at nostrum?</p>
                    <p className="content__text">Deleniti saepe eaque optio blanditiis voluptatem tempore est, veritatis porro facere explicabo atque? Debitis quisquam, enim aut illum laborum molestiae adipisci animi impedit quasi, placeat nemo, sequi ipsum accusamus? Tenetur quibusdam iure quas mollitia inventore reiciendis dolores. Laboriosam adipisci quibusdam ipsam modi ratione, doloremque quos nostrum et dolorem ut nisi, sed, dolorum deleniti tenetur mollitia molestias. Mollitia similique, tenetur, nemo quidem saepe hic laudantium libero ex soluta laboriosam consequatur dolores, amet eum debitis excepturi quo corrupti. Officiis ad pariatur optio dolorum nulla quidem, necessitatibus placeat blanditiis et doloribus laboriosam dicta officia voluptatem consectetur possimus praesentium quae velit nam iste reprehenderit!</p>
                </div>
            </div>
        )   
        }
}
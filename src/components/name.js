export class NameCtrl {
    constructor(RestApi) {
        RestApi.ready().then(
            user => {
                this.user = RestApi.$wp_v2.users({ id: RestApi.$server.currentUser.ID }) // users() or currentUser?
                this.user.get()  
            }
        )
    }
}

let Name = {
    controller: NameCtrl,
    template: `
    <div class="panel panel-default">
        <h2>User</h2>
        <div> {{ $ctrl.user }} </div>
        <div> First name: "{{ $ctrl.user[0].attr('first_name') }}" </div>
        <div> Last name: "{{ $ctrl.user.attr('last_name') }}" </div>
    </div>
    `
}

export default Name;
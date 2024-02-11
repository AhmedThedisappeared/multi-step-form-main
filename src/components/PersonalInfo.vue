<template>
    <div class="info flex flex-column">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <form @submit.prevent="submitUserInfo">
            <div class="container flex flex-column">
                <div class="inputs flex flex-column">
                    <div class="input flex flex-column">
                        <label for="name">Name</label>
                        <input type="text" id="name" v-model="userName" placeholder="e.g.stephen King"
                            :class="{ unvaild: !userNameVaild }" name="userName" autocomplete="given-name">
                        <p v-if="!userNameVaild">This field is required</p>
                    </div>
                    <div class="input flex flex-column">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" v-model="userEmail" placeholder="e.g.stephenKing@lorem.com"
                            :class="{ unvaild: !userEmailVaild }" name="userEmail" autocomplete="off">
                        <p v-if="!userEmailVaild">This field is required</p>
                    </div>
                    <div class="input flex flex-column">
                        <label for="number">Phone Number</label>
                        <input type="text" id="number" v-model="userNumber" placeholder="e.g.+1234567890" 
                            :class="{ unvaild: !userNumberVaild }" name="userNumber" autocomplete="given-number">
                        <p v-if="!userNumberVaild">This field is required</p>
                    </div>
                </div>
                <div class="buttons">
                    <div>
                        <a v-if="back" href="#">Go Back</a>
                    </div>
                    <div>
                        <button v-if="next" class="next" type="submit">Next Step</button>
                        <button v-if="confirm" class="confirm">Confirm</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { mapState ,mapMutations } from 'vuex';
export default {
    name: 'PersonalInfo',
    data() {
        return {
            fieldList: [
                { type: 'text', placeholder: 'e.g.stephen King', label: 'Name', id: 'name', vaild: true,value: null },
                { type: 'email', placeholder: 'e.g.stephenKing@lorem.com', label: 'Email Address', id: 'email', vaild: true, value: null },
                { type: 'text', placeholder: 'e.g.+1234567890', label: 'Phone Number', id: 'number', vaild: true, value: null },
            ],
            userName: null,
            userNameVaild: true,
            userEmail: null ,
            userEmailVaild: true,
            userNumber: null,
            userNumberVaild: true,
        }
    },
    computed: {
        ...mapState(['back', 'next', 'confirm'])
    },
    methods: {
        ...mapMutations(['NAVIGATE_SIDEBAR']),
        submitUserInfo() {
            const emailReg = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
            const numberReg = /^(\+)\d{10}/;
            if(!this.userName) {
                this.userNameVaild= false;
            } else {
                this.userNameVaild= true;
            }
            
            if(this.userEmail) {
                if(emailReg.test(this.userEmail)) {
                    
                    this.userEmailVaild=true;
                }else {
                    this.userEmailVaild=false;
                }
            } else {
                this.userEmailVaild=false;
            }
            if(this.userNumber) {
                if(numberReg.test(this.userNumber)) {
                    
                    this.userNumberVaild=true;
                }else {
                    this.userNumberVaild=false;
                }
            } else {
                this.userNumberVaild=false;
            }

            if(this.userNameVaild && this.userEmailVaild && this.userNumberVaild) {
                this.NAVIGATE_SIDEBAR(2);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.info {
    flex: 1;

    h1 {
        color: var(--Marine-blue);
    }

    p {
        margin: 0.8rem 0 2rem;
        color: var(--Cool-gray);
    }

    form {
        flex: 1;

        .container {
            height: 100%;
            justify-content: space-between;

            .inputs {
                gap: 1.5rem;

                .input {
                    position: relative;

                    label {
                        margin-bottom: 8px;
                        color: var(--Marine-blue);
                        font-weight: 500;
                    }

                    input {
                        padding: 1rem;
                        border-radius: 8px;
                        cursor: pointer;
                        border: 1px solid var(--Cool-gray);
                        &::placeholder {
                            color: var(--Cool-gray);
                            font-size: 1rem;
                        }

                        &:focus {
                            outline: 1px solid var(--Cool-gray);
                        }

                        &:hover {
                            outline: 1px solid var(--Purplish-blue);
                        }

                        &.unvaild {
                            outline: 1px solid var(--Strawberry-red);
                        }
                    }

                    p {
                        position: absolute;
                        top: 0;
                        right: 0;
                        margin: 0;
                        color: var(--Strawberry-red);
                    }
                }
            }
        }
    }

    @media (max-width:991px) {
        flex: unset;
        background-color: var(--White);
        top: 3rem;
        z-index: 2;
        padding: 2rem 1.5rem;
        border-radius: 8px;
        margin-top: 3rem;

        form {
            .container {
                gap: 1rem;
            }
        }
    }
}
</style>
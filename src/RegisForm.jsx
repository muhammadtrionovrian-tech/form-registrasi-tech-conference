import { useForm } from "react-hook-form";


function RegisForm() {
    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data ) => {
        console.log(data);
    };

    const validatePassword = (value) => {
        if (value.length < 8) {
            return false
        }

        if (!/\d/.test(value)) {
            return false;
        }
        
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)){
            return false;
        }
        
        return true;
        };
        
    return(
        <div className={`
                w-full px-20 min-w-[500px]
            `}
        >
            <h1 className={`
                text-[var(--tertiary-color)]
                m-0
                font-style
                font-bold
                text-center
                text-3xl
                p-7
            `}
            >
                Daftar Tech Conference
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-[20%]">
                <div>
                    <div>
                        <label className="block text-left font-bold py-2" htmlFor="fullName">Nama Lengkap *</label>
                        <div className="flex items-center min-w-64 rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                            <input
                                className="w-full rounded-mdblock font-medium  py-1.5  focus:outline-none sm:text-sm/8"
                                type="text"
                                name="fullName"
                                {...register('fullName', { required: 'Nama lengkap wajib diisi!' })}
                            />
                        </div>
                    </div>
                    
                    <div className="text-red-800 text-left p">{errors.fullName && <span>{errors.fullName.message}</span>}</div>
                </div>
        
                <div>
                    <div>
                        <label className="block text-left font-bold py-2" htmlFor="userName">Username *</label>
                        <div className="flex items-center min-w-64 rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                            <input
                                className="w-full rounded-mdblock font-medium py-1.5  focus:outline-none sm:text-sm/8"
                                type="text"
                                name="userName"
                                {...register('userName', { required: true, minLength: 6, maxLength: 20})}
                            />
                        </div>
                    </div>
                    <div className="text-red-800 text-left p">
                        {errors.userName && errors.userName.type == 'required' && <span className= 'error'>Username wajib diisi!</span>}
                        {errors.userName && errors.userName.type == 'minLength' && <span className= 'error'>Minimal 6 karakter</span>}
                        {errors.userName && errors.userName.type == 'maxLength' && <span className= 'error'>Maksimal 20 karakter</span>}
                    </div>
                </div>
        
                <div>
                    <div>
                        <label className="block text-left font-bold py-2" htmlFor="email">Email *</label>
                        <div className="flex items-center min-w-64 rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                            <input
                                className="w-full rounded-mdblock font-medium  py-1.5  focus:outline-none sm:text-sm/8"
                                type="email"
                                name="email"
                                {...register('email', {
                                    required: true,
                                    pattern: /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                })}
                            />
                        </div>
                    </div>
                    <div className="text-red-800 text-left p">
                        {errors.email && errors.email.type == 'required' && <span className="error">Email wajib diisi!</span>}
                        {errors.email && errors.email.type == 'pattern' && <span className="error">Format email tidak valid!</span>}
                    </div>
                </div>
        
                <div>
                    <div>
                        <label className="block text-left font-bold py-2" htmlFor="password">Password *</label>
                        <div className="flex items-center min-w-64 rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                            <input
                                className="w-full rounded-mdblock font-medium  py-1.5  focus:outline-none sm:text-sm/8"
                                type="password"
                                name="password"
                                {...register('password', { required: true, validate: validatePassword })}
                            />
                        </div>
                    </div>
                    <div className="text-red-800 text-left p">
                        {errors.password && errors.password.type == 'required' && <span className="error">Password wajib diisi!</span>}
                        {errors.password && errors.password.type == 'validate' && <span className="error">Password harus 8+ karakter, mengandung angka & simbol</span>}
                    </div>
                </div>
        
                <div>
                    <div>
                        <label className="block text-left font-bold py-2" htmlFor="umur">Umur *</label>
                        <div className="flex items-center min-w-64 rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                            <input
                                className="w-full rounded-mdblock font-medium  py-1.5  focus:outline-none sm:text-sm/8"
                                type="number"
                                name="umur"
                                {...register('umur', { required: true, min: 18, max: 100 })}
                            />
                        </div>
                    </div>
                    <div className="text-red-800 text-left p">
                        {errors.umur && errors.umur.type == 'required' && <span className="error">Umur wajib diisi!</span>}
                        {errors.umur && ['min', 'max'].includes(errors.umur.type) && <span className="error">Peserta harus berusia antara 18 dan 100 tahun</span>}
                    </div>
                </div>
        
                <div>
                    <div>
                        <label className="block text-left font-bold py-2" htmlFor="tiket">Tipe Tiket *</label>
                        <div className="flex p-2">
                            <select className="border-2" name="tiket" {...register('tiket', { required: true})}>
                                <option value="">--Pilih tipe--</option>
                                <option value="generalAccess">General Access</option>
                                <option value="vip">V.I.P</option>
                                <option value="student">Student</option>
                            </select>
                        </div>
                    </div>
                    <div className="text-red-800 text-left p">{errors.tiket && errors.tiket.type == 'required' && <span className="error">Anda harus memilih tipe tiket!</span>}</div>
                </div>
        
                <div>
                    <div>
                        <label className="block text-left font-bold py-2" htmlFor="website">Situs Web Pribadi</label>
                        <div className="flex items-center min-w-64 rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                            <input 
                                className="w-full rounded-mdblock font-medium  py-1.5  focus:outline-none sm:text-sm/8"
                                type="text" 
                                name="website" 
                                {...register('website', {pattern: /^https?:\/\/[^\s$.?#].[^\s]*$/})}
                            />
                        </div>
                    </div>
                    <div className="text-red-800 text-left p">{errors.website && <span className="error">Format url tidak valid!</span>}</div>
                </div>
        
                <div>
                    <div>
                        <label className="block text-left">
                            <input
                                type="checkbox"
                                name="agree"
                                {...register('agree', { required: true })}
                            />
                            <span className="pl-2 align-center">
                                I Agree to Term of Services and Privacy Policy *
                            </span>
                        </label>
                    </div>
                    <div className="text-red-800 text-left p">{errors.agree && <span className="error">Anda harus menyetujui syarat dan ketentuan!</span>}</div>
                </div>
                <div className="font-bold text-center m-5 my-20 p-2 rounded-md bg-[var(--primary-color)] text-white hover:bg-indigo-500">
                    <button type="submit">
                        DAFTAR
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisForm;
import { useTranslation } from 'react-i18next';
import './correo.scss';
import Swal from 'sweetalert2'

function Correo() {

	const { t: translate } = useTranslation('contact');

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.currentTarget;
		const formData = new FormData(form);

		formData.append("access_key", "3d255f16-be79-4483-9120-78bfe3e44cee");

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const res = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: json
		}).then((res) => res.json());

		if (res.success) {
			Swal.fire({
				title: "Message Send!",
				text: "Thank You!",
				icon: "success"
			});
			console.log("Success", res);

			form.reset();
		}
	};

	return (
		<>
			<div id='contact' className='app-mail-container'>
				<div className='mail-container'>
					<div className='mail-info-section' >
						<h2 className='contacttittle' >{translate('title')}</h2>
						<h1>{translate('sectionTitle')}</h1>
						<p>{translate('description')}</p>
						<span>{translate('email')}</span>
					</div>
					<form onSubmit={onSubmit} className='mail-submit-section'>
						<span className='formcardtittle'>{translate('cardtitle')}</span>
						<input type='text' className='formInput' placeholder={translate('cardnameinput')} name='name' required></input>
						<input type='email' className='formInput' placeholder={translate('cardemailinput')} name='email' required></input>
						<textarea className='formTextArea' placeholder={translate('cardmessageinput')} name='message' required></textarea>
						<input type="submit" className='buttonsend' value={translate('cardbutton')}></input>
					</form>
				</div>
			</div>
		</>
	)
}

export default Correo;
import { IgrButton, IgrButtonModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { useNavigate } from 'react-router-dom';
import styles from './reset-password.module.css';
import createClassTransformer from '../../style-utils';

IgrButtonModule.register();
IgrInputModule.register();
IgrRippleModule.register();

export default function ResetPassword() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();

  return (
    <>
      <div className={classes("row-layout reset-password-container")}>
        <div className={classes("row-layout left")}>
          <div className={classes("column-layout group")}>
            <img src="/src/assets/Travel-App-Color-Logo.svg" className={classes("image")} />
            <div className={classes("column-layout group_1")}>
              <div className={classes("column-layout group_2")}>
                <h5 className={classes("h5")}>
                  <span>Reset password</span>
                </h5>
                <p className={classes("typography__body-2 text")}>
                  <span>Please, type the email you have used for your your account registration. We are going to send you an activation link there where you can reset your password.</span>
                </p>
              </div>
              <div className={classes("column-layout group_1")}>
                <IgrInput type="email" label="Email address" placeholder="myname@website.com" outlined="false" className={classes("input")}></IgrInput>
              </div>
            </div>
            <IgrButton size="large" clicked={() => navigate(`/home/set-new-password`)} className={classes("button")}>
              <span key={uuid()}>Send reset link</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </div>
        <div className={classes("row-layout right")}>
          <img src="/src/assets/ResetPassword.jpg" className={classes("image_1")} />
        </div>
      </div>
    </>
  );
}

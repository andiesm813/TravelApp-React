import { IgrButton, IgrButtonModule, IgrCheckbox, IgrCheckboxModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './sign-up.module.css';
import createClassTransformer from '../../style-utils';

IgrButtonModule.register();
IgrCheckboxModule.register();
IgrInputModule.register();
IgrRippleModule.register();

export default function SignUp() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const [checked, setChecked] = useState<boolean | undefined>(true);

  return (
    <>
      <div className={classes("row-layout sign-up-container")}>
        <div className={classes("row-layout left")}>
          <div className={classes("column-layout group")}>
            <img src="/src/assets/Travel-App-Color-Logo.svg" className={classes("image")} />
            <div className={classes("column-layout group_1")}>
              <h5 className={classes("h5")}>
                <span>Sign Up</span>
              </h5>
              <p className={classes("typography__body-2 text")}>
                <span>Don't have an account? Sign up now for free and enjoy thousands of great travel opportunities</span>
              </p>
            </div>
            <div className={classes("column-layout group_2")}>
              <IgrInput type="email" label="Email address" placeholder="myname@website.com" outlined="false" className={classes("input")}></IgrInput>
              <IgrInput type="password" label="Password" placeholder="Min 8 characters" outlined="false" className={classes("input")}></IgrInput>
              <IgrInput type="password" label="Repeat Password" placeholder="Min 8 characters" outlined="false" className={classes("input")}></IgrInput>
              <div className={classes("row-layout group_3")}>
                <IgrCheckbox labelPosition="after" checked={checked} change={(_c, e) => setChecked(e.detail)} className={classes("checkbox")}>
                  <span key={uuid()}>Remember me</span>
                </IgrCheckbox>
              </div>
            </div>
            <div className={classes("column-layout group_4")}>
              <IgrButton size="large" clicked={() => navigate(`/in-app/dashboard`)} className={classes("button")}>
                <span key={uuid()}>Create new account</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
              <div className={classes("row-layout group_5")}></div>
              <IgrButton variant="outlined" size="large" clicked={() => navigate(`/home/login`)} className={classes("button button_1")}>
                <span key={uuid()}>Already have an account? SIgn in</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
          </div>
        </div>
        <div className={classes("row-layout right")}>
          <img src="/src/assets/SignUp.jpg" className={classes("image_1")} />
        </div>
      </div>
    </>
  );
}
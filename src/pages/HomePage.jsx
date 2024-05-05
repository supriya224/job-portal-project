import React from "react";
import classNames from "classnames";
import styles from "./page.module.css";

export const HomePage = () => {
  return (
    <section className={classNames(styles.home_page)}>
      <div className={classNames()}>
        {/* filter data ui */}
        <div className={classNames(styles.filter_data)}>
          <div className={classNames(styles.filter_items)}>
            <input type="text" name="" id="" placeholder="Roles" />
            <select name="" id="">
              <option value="">hhh</option>
              <option value="">hhh</option>
              <option value="">hhh</option>
            </select>
          </div>
        </div>
        {/* ------------------------------------------------------------ */}
        {/* card data details */}
        {/* main div */}
        <section className={classNames(styles.card_Section)}>
        <div className={classNames(styles.main_card_page)}>
          {/*  div with three cards */}
          <div className={classNames(styles.main_card_items)}>
            {/* card div with details */}
            <div className={classNames(styles.card)}>
              <div className={classNames(styles.card_items)}>
                <p className={classNames(styles.card_date)}>
                  posted 10 days ago
                </p>
                {/* image with title */}
                <div className={classNames(styles.card_items_details)}>
                  <img width={20} height={30} src="data:image/jpeg;base64,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" alt="" />
                  
                  <div>
                  <p>fampay</p>
                  <p>Backend Engineer </p>
                  <p>Bangalore, india</p>
                    </div>
                </div>
                <p>Estimated salary: 18-15lpa</p>
              </div>
              <div className={classNames(styles.card_items_data)}>
                <p>About company</p>
                <p className="">About us</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum quaerat enim, quae corrupti qui blanditiis sit, dolorum
                  voluptatum veritatis ut quam ullam natus hic obcaecati odit
                  atque soluta vel eos!
                </p>
                <p>view job</p>
                <p>minimum experience</p>
                <p>2years</p>
                {/* two button  */}
                <div className={classNames(styles.card_button_items)}>
                <button className={classNames(styles.card_button1)}>Easy Apply</button>
                <button className={classNames(styles.card_button2)}>Unlock refrral asks</button>
                </div>
              
              </div>
            </div>
          </div>
        </div>






















        <div className={classNames(styles.main_card_page)}>
          {/*  div with three cards */}
          <div className={classNames(styles.main_card_items)}>
            {/* card div with details */}
            <div className={classNames(styles.card)}>
              <div className={classNames(styles.card_items)}>
                <p className={classNames(styles.card_date)}>
                  posted 10 days ago
                </p>
                {/* image with title */}
                <div className={classNames(styles.card_items_details)}>
                  <img width={20} height={30} src="data:image/jpeg;base64,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" alt="" />
                  
                  <div>
                  <p>fampay</p>
                  <p>Backend Engineer </p>
                  <p>Bangalore, india</p>
                    </div>
                </div>
                <p>Estimated salary: 18-15lpa</p>
              </div>
              <div className={classNames(styles.card_items_data)}>
                <p>About company</p>
                <p className="">About us</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum quaerat enim, quae corrupti qui blanditiis sit, dolorum
                  voluptatum veritatis ut quam ullam natus hic obcaecati odit
                  atque soluta vel eos!
                </p>
                <p>view job</p>
                <p>minimum experience</p>
                <p>2years</p>
                {/* two button  */}
                <button>Easy Apply</button>
                <button>Unlock refrral asks</button>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames(styles.main_card_page)}>
          {/*  div with three cards */}
          <div className={classNames(styles.main_card_items)}>
            {/* card div with details */}
            <div className={classNames(styles.card)}>
              <div className={classNames(styles.card_items)}>
                <p className={classNames(styles.card_date)}>
                  posted 10 days ago
                </p>
                {/* image with title */}
                <div className={classNames(styles.card_items_details)}>
                  <img width={20} height={30} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0ODg4QEA8NEA8QDxUQDxAQDQ8PFxcQFxEWFhURFRUYHSggGRslHhUVITEjJjArLi4uFx82OzUsNygvLisBCgoKDg0OGxAQFi8lICMtLzArNystLysrLS0tLS01LS0uKy8tLSsrLS0tLSstLSstLS0rLS0rMC8rLS0tKzAtLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQUGBAMCB//EADsQAAIBAgMEBwYFAgcBAAAAAAABAgMRBAUhEjFRYQYTIkFxgZEyUnKhscEjQmKS0bLhM0ODwtLw8RT/xAAbAQEBAAMBAQEAAAAAAAAAAAAABQEEBgMCB//EADMRAQABAgMFBgcBAAEFAAAAAAABAgMEESEFEjFh0UFRcYGRsRMiMqHB4fDxIxQkM0JS/9oADAMBAAIRAxEAPwDWH586wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuGS4C4C4C4C4C4C4C4C4C4C4C4C4C4C4C4C4C4C4C4Ewi5NKKcm9ySbfojNNM1TlTGc8tWJmIjOZWDyeuqc6k9mCjFytJ6u3huN6dnXqbdVyvKIiM+bV/6y1NcUU65q65oNsuAuAuAuAuBAAAAAAAAAAAAAAAAAAAAAAHRhMDWrexBte9uXq9D3sYa7e/8AHTnz7PV5Xb9u39U9V1hOjkVZ1Z3/AEw0XnLe/kWLGx4jW7Vnyjrx9k67tGeFuPXoucPhqdJWhCMVyW/xe9la1Zt2oyopiE+5cruTnVOau6TV9mhs99SSXktX9F6mhte7u2N3/wCp9tW3s+3vXd7uhlTmVsAAAAAD5DIBIEASBAFjlGVyxDbbcacXaUu9v3VzN7BYGrEznOlMcZ/ENTFYqLMZcZlo6eTYWKt1afOTcmX6NnYamMtzPx1SasZemc970c+K6P0JrsbVOXJuS80/tY8L2ybFcfJ8s+sek/jJ629oXafq1hn8fl1Wg+2rx7px1X9n4kPE4O7h5+eNO+OH6VLOJt3o+Wde7tcZqthIEAAAACUrtJXbe5LURGc5QxOmq0weRV6lnJKnHjPf+3+bFGxsu/c1q+WOfH065NO7j7VGkazy6rvB5Hh6erXWS4z1XlHd9SxY2ZYt6zG9PPpwTbuOu16ROUcuqySKLTSAAyHSLFqpW2V7NNbK+L8z+3kcttS/F29uxwp08+3p5L2Bs7lrOeM69FWTm6AAAACbgfIAAAAAWGVZfGvLtVYQV/Z2o7b8F9zdweEpv1fNXEecb0+Efn7NXE4ibUfLTM+zYYehGnCMIK0YqyX38Tqbdum3TFFEZRCDXXVXVNVU6y9D0fABEoppppNPRpq6aMTETGUsxMxOcM5m+RbN50Vdb5U97XOPHwIGN2Xu512Y07Y6dPTuV8Lj8/luevXqz9yKpgAD3w2Fq1XanCUuNlovF7ketqxcuzlbpz/u/g+Ll2i3Gdc5LrB9G3o6s7fph95Mr2NjTxu1eUdf15p13aUcLcevRd4XBUqK/DhGPPe34t6lezhrVmP+OnL39eKbcv3Ln1zm6D3eQAAAVWe5mqENmL/FktP0r3n9ibtHGxYo3aZ+aftz6N3B4X4tW9V9Mffl1ZA5deAAAAAAADDIAAAAAFxlOeTpNQqNzp8d8o+HFcv/AAq4LaVVqd25rT946xy9O5oYrA03Pmo0n7S1VOcZJSi04tXTTumjpKaoqiKqZziUOqmaZymNX0fTAAAz3SLK4bMq8LRa9tbk7u11z+v1h7UwVO7N6nTv5/v38VXAYqrOLVWvd/dzPU4Sk1GKcpPRJK7IVNNVUxTTGcyrVTFMZzOjQ5d0dWkq7/04v+qS+3qXMLsj/wBr3pH5np6yk39o9lr16Qv6dOMUoxSjFbklZFummmmN2mMoTKqpqnOZ1fR9PkAAAIYFLmefwheNK05+9viv+T+RIxe1aKPltaz39kdVHD4Cqv5rmkff9MxUqSnJyk3KTd233s52uuquqaqpzmVmmmKYyiNHyfL6AAAAAAAQGQAAAAAAFt0fzN0pqnJ/hzdtfyye5rlxKmzcZNquLdU/LP2n+4+rQx2Gi5Tvxxj7w1506CAeOLxMKMJTm7JerfclzPK9eos0TXXwh6WrVVyqKaWUqVsRj6qitIrVL8sV70n3s5uqu/tC7uxwj0jnPfP9C3TRawdGc8fvLS5dl1PDxtFXk/am97/hci/hcJbw9OVPHtntn+7ki/ia7051cO52G01wAAAAVOPz6jSuo/iT4RfZXjL+Lk3E7UtWtKfmnlw9embesYC5c1q0j7+jOY7M61fScuz3QjovTv8AMg4jG3r+lU6d0cP35q9nC27X0xr39r2wWSYirZ7PVx4z09I7z1sbNv3dct2OfTj7PO7jrVvTPOeXVxYql1dScNpS2JOO0la9uRqXrfw7lVGeeU5Ni3Xv0RVllm8jyegAAAAAACAAAAAAAAAG5yfFddQhJ6yS2Z/EtL+ej8zsMDf+NYpqnjwnxj+zc3irXwrs0xw4w7TbazJZziZ4rEKlT1jGWxFdzl+aT5b/ACXM5nHXqsViItW+ETlHj2z5e3iu4S3Th7M3K+M6z4dkNHl2ChQpqEd++Uu+UuJew2Gpw9vcp8+cpF+/Ver3p8uTqNh4gAABWZhndGjdJ9ZP3Yvc+cty+pPxO0bNnTjPdH5ns9+TcsYK5d14Rz6M9icwxOLlsLaaf+XTTtb9XHz0Id3FYnFzuxw7qfz+9Fa3h7OHjen1l14Po3UlZ1ZKC92NpS9dy+ZtWNj11a3asuUaz0j7te7tKiNLcZ+3X2X2Dy2hR9iC2vefal6vd5Fmxg7Nn6Kde/jPqmXcTcu/VPR947EdVSqVPdi2vi3Jetj7xF74Nqq53R9+z7vmzb+JcijvYJtvfq+98zi9Z4uoQYAAAAAAAEBkAALgAAAABoeiOI7VWnxSmvFaP6r0LexruVVVvv1/E/hK2pb0pr8lxnWL6mhOSdpPsQ+J9/krvyKmOv8AwbE1Rx4R4z04p+Es/FuxE8OMq7orgtmDrNay7MOUU9X5tfI0dj4bdom7PGdI8P3+G3tK/nV8OOzj4r8tJYAA48wzKlh1232mrxgtW/4XNmricZaw8Z1zr3drYsYa5en5Y07+xRVMTjcbpTi6dJ8HsprnP83giPVexmN0t07tPp6z2+SlTbw2F1rnOr+7OzzdeC6NU42dWTm/djeMfXe/kbNjY9unW7OfKNI6+zwvbTrq0txl956e66o0YU1swjGMeEUkVqLdNuN2iMo5J1ddVc51Tm9D7fIBmelOPTaoRfsvaqePdH7+hA2viomfg09ms/iPz6LOzcPlHxZ8urPENVAAAAAAALgQADIGAAAAAAy7clr9XiaT7nLZfhLs/f5G3gbnw8RRPPL10a2Lo37NUcs/RadKKjqVqNCO/T903ZeiXzKO1qpuXaLFP9M6R6flpbOpii3Vdn+iGko0lCMYR9mMVFeCVi5RRFFMU08I0SK6prqmqe19n2+QABxvLaLqSqyjtzdtZ9pKyskluNacJam5NyqnOeeuXhHB7xibkURRTOUcnYbLwAAHzOaim20kt7bSXqYmqKYzmdGYiZnKIUGbdIYpOFB3ludS2i+Hi+e7xIuM2rTEblnWe/sjw7/bxVMNs6Zneu8O7qzLd9Xq3q29dSBOusrOSDAAAAAAAABlAAAAAAAAACU7bt/d4jOY1gXmVz/+nHup3K87clFRX1RYwlX/AFGO+J5+kZJmJp+BhNzy/LWHRoYAAAAAHliMRTpx2pyjFcZO3pxPO5dotxvVzlHN90W6q5ypjNRY7pPFXVGG1+ud0vKO9+diPf2zEaWac+c9OPsp2dmTOtyfKOqgxeNq1nepOUuC3JeCWiI17EXL053Ks/b0VLVmi1GVEZOc8XqAAAAAAAAAAAAAAAAAAAAAv+h6/Fqvv6tf1f2RZ2LH/JXPKPdL2r9FPi1R0SIAAAHPjMbSoq9SajwW9vwS1Z43sRasxncqy9/R62rFy7OVEZs9juk05XVGOwvflZy8luXzImI2xVOlqMuc8fTh7q1nZlMa3Jz5Rw6+yirVp1JbU5SlLjJtkeu5VcnernOealRRTRGVMZQ+D5fQAAAAAAAAAAAAEXDJcBcBcBcBcBcBcBcC46K1tnE7PvwcV4q0vsynsi5u4jLvievVP2lRvWc+6f02R1DnwDzr1oU4uU5KMVvbdj4uXKbdO9XOUPuiiqud2mM5ZrMekspdmgtlbtuSu38Me7z+RCxO16p+WzGXOePlH94K9jZkR812fLs85UeIVTabqKe29Xt7V3weupHuRXvZ3M8+fH7qdvc3fkyy5cHlc+H2XAXAXAXAXAXAXAXAXAXAXAXAXAgAAAAAAAAAA9MPWlTnCcfahJSXk9x927k264rp4xOb5roiumaZ7X6Hh60akIzj7MkpL+Dtbdym5RFdPCXKXKJoqmmeMOXNczp4aF5ayfsQT1fPkuZr4vF0YenOrj2R3/p7YbDV36so4dss7RwuKzCe3N7NNPR2eyuUI9/j8yJRZxGPq365yp+3lHb4/dWru2MHTu0xnP385aPL8roYddiPa75y1l693kXMPg7NiPkjXvnj/eCTfxVy99U6d3YzXSxWxPjSi/nJfYhbYj/uPKPyr7Mn/g85/CmJagAAAAAAAAAAAAAAAQGQAAAAAAAAAA0HRnNVTUqVR9iznB8GleUfO1/G/Es7LxsW87Vc6cY/MJe0MJNeVyjjwn8SZVg5Y6tOvW/w1KyjxfdBfpS/7vGEsVY27N+79P8AaeEf3axib0YS3Fq3x/tfGWrikkkkkkrJJW04HQxERGUIkznrKTLDJ9MoWq0pcabj+2V/9xzu2qcrlFXfHtP7XNlVfJVHP3/xnyMqgAAAAAAAAAAAAAAC5gLgLgLgLgLgLgLgLgLgRcDadFa8JYaMU1tQclNeMm0/R/I6nZNymrDxTHGM8/OXPbSoqpvTVPCeHouSmngGf6Y0r0qc/dqW8pL+YojbaoztU1d0+/8AkKuyq8rlVPfHt/rJ3OcXC4C4C4C4C4C4C4C4C4C4C4C4C4HyZZAAAAAAAAAAAB04DGzoVFUg9Vo09zj3xZ7YfEV2K4rp/wBeN6zTeo3Km7y/HU8RTU4PlKL3xlwZ12HxFF+jfo/xzN+xVZr3av8AXUe7xcGeYfrcNWit+ztLxj2vtbzNTHWviYeqnln6atnB3Ny/TPPL1YA451IZAAAAAAAAAAAAAAEXMBcBcBcBcBcBcBcBcBcBcBcDqy7H1MPNTg+UovdJcGbGGxNeHr3qPPm8b9ii9Tu1f43OWZjSxMNqD1XtQe+L58uZ1eGxVvEU71E+MdsObxGGrsVZVeU97sNlrvzvNML1FepT7lLs/A9Y/JnF4uz8G9VR6eHY6zD3fi2qa/Xx7XJc13sXAXAXAXAXAXAXAXAXAXAXAXAgMgAAAAAAAAAAAAAPbC4mpRmp05OMl38uDXej0s3q7Ve/ROUvi5apuU7tcZw2mTZ3TxKUXaFXvhfR848fDedRgtoUYiMp0q7u/wAHO4vA12NY1p/uLj6XZftwjWiu1T0n8F9H5P6vga218Nv0Rdp4xx8P02Nl4jdqm1Pbw8f2yJzi6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAACbTTWjWqa014iJynODi0mU9JNOrxPai1brLX04TXeuf1LmE2rpuX9Y7+sJGJ2brv2dJ7uinzehSp1pKlOM6bSlFxltWv+W/fYmYy1bt3Zi1VnT65clDC3K67cTcpyn+1cZrPcAAAAAAAAAAAACAyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAEAAJAgCQAACAJAgCQAACAJAAQBIACAJAAQBIACAJAAQGQCAJAAQBIEAAJAAQAAAAJAAQAAAAJAgAAAkCAAEgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q==" alt="" />
                  
                  <div>
                  <p>fampay</p>
                  <p>Backend Engineer </p>
                  <p>Bangalore, india</p>
                    </div>
                </div>
                <p>Estimated salary: 18-15lpa</p>
              </div>
              <div className={classNames(styles.card_items_data)}>
                <p>About company</p>
                <p className="">About us</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum quaerat enim, quae corrupti qui blanditiis sit, dolorum
                  voluptatum veritatis ut quam ullam natus hic obcaecati odit
                  atque soluta vel eos!
                </p>
                <p>view job</p>
                <p>minimum experience</p>
                <p>2years</p>
                {/* two button  */}
                <button>Easy Apply</button>
                <button>Unlock refrral asks</button>
              </div>
            </div>
          </div>
        </div>
        </section>
     
      </div>
    </section>
  );
};

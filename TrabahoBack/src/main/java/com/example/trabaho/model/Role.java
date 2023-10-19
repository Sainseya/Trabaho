package com.example.trabaho.model;
import jakarta.persistence.*;

@Entity
@Table(name = "roles")
public class Role {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Enumerated(EnumType.STRING)
        @Column(length = 20)
        private Erole name;

        public Role() {

        }

        public Role(Erole name) {
            this.name = name;
        }

        public Erole getName() {
                return name;
        }

        public void setName(Erole name) {
                this.name = name;
        }



}

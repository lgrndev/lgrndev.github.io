export const exercices = [
    {
        td: 1,
        titre: "TD 1 - Exercice 1",
        description: "Cet exercice consiste à afficher 'Bonjour !' à l'écran.",
        code: `#include <iostream>

using namespace std;

int main()
{
    cout << "Bonjour !" << endl;
    return 0;
}`,
    },
    {
        td: 1,
        titre: "TD 1 - Exercice 2",
        description: "Cet exercice consiste à demander trois nombres à l'utilisateur et à afficher le plus grand de ces nombres.",
        code: `#include <iostream>

using namespace std;

int main()
{
    int a,b,c;

    cout << "Entrez le premier nombre" << endl;
    cin >> a;

    cout << "Entrez le deuxieme nombre" << endl;
    cin >> b;

    cout << "Entrez le troisieme nombre" << endl;
    cin >> c;

    if (a > b  && a > c) {
        cout << "C'est le premier nombre qui est le plus grand" << endl;
    }
    else if (b > a  && b > c) {
        cout << "C'est le deuxieme nombre qui est le plus grand" << endl;
    }
    else {
        cout << "C'est le troisieme nombre qui est le plus grand" << endl;
    };

    return 0;
}`,
    },
    {
        td: 1,
        titre: "TD 1 - Exercice 3",
        description: "Cet exercice consiste à calculer et afficher la racine carrée d'un nombre entier donné par l'utilisateur.",
        code: `#include <iostream>
#include <cmath>

using namespace std;

int main()
{
    int entier;

    cout << "Entrez un entier" << endl;
    cin >> entier;

    float racine = sqrt(entier);

    cout << "La racine de " << entier << " est : " << racine << endl;

    return 0;
}`,
    },
    {
        td: 1,
        titre: "TD 1 - Exercice 4",
        description: "Cet exercice consiste à calculer la somme alternée des inverses des nombres entiers de 1 à 999999 et à la comparer avec la valeur de log(2.0).",
        code: `#include <iostream>
#include <cmath>

using namespace std;

int main()
{
    float somme(0);
    float signe(1);

    for (float i(1);i<1000000;i++) {
        somme += (1/i) * signe;
        signe = -signe;
    }

    cout << "La somme est " << somme << endl;
    cout << "La valeur de log(2.0) est : " << log(2) << endl;

    return 0;
}`,
    },
    {
        td: 2,
        titre: "TD 2 - Exercice 1",
        description: "Cet exercice consiste à calculer la valeur de pi",
        code: `#include <iostream>
#include <cmath>

using namespace std;

int main()
{
    int Nmax;
    float somme(0);

    cout << "Donnez une valeur de Nmax" << endl;
    cin >> Nmax;

    for (int i(0);i < Nmax;i++) {
        somme += 4*(pow(-1,i)/(2*i+1));
    };

    cout << "La valeur de pi est : " << somme << endl;

    return 0;
}`
    },
    {
        td: 2,
        titre: "TD 2 - Exercice 2",
        description: "Cet exercice consiste à générer un entier aléatoire entre 100 et 200.",
        code: `#include <iostream>

using namespace std;

int main()
{
    int n1 = 100;
    int n2 = 200;

    int entier = rand() % (n2-n1+1) + n1;
    cout << entier << endl;

    return 0;
}`,
    },
    {
        td: 2,
        titre: "TD 2 - Exercice 3",
        description: "Cet exercice consiste faire des opérations avec un tableau de 10 entiers.",
        code: `#include <iostream>
#include <ctime>

using namespace std;

int main()
{
    srand(time(NULL));

    int tableau[10];
    int somme(0);
    float moyenne;
    int plusGrand(0);
    int nPaire(0);

    cout << "Le tableau est : " << endl;

    for (int i(0);i < 10 ;i++) {
        tableau[i] = rand() % (200 - 100 + 1) + 100;
        cout << tableau[i] << " " ;
    }

    cout << endl;

    for (int i(0);i < 10;i++) {
        somme += tableau[i];
    };

    cout << "La somme des elements est : " << somme << endl;

    moyenne = somme / 10;

    cout << "La moyenne des elements est : " << moyenne << endl;

    for (int i(0);i < 10;i++) {
        if (tableau[i] > plusGrand) {
            plusGrand = tableau[i];
        };
    };

    cout << "Le plus grand des elements est : " << plusGrand << endl;


    for (int i(0);i < 10;i++) {
        if (tableau[i]%2 == 0) {
            cout << tableau[i] << " est pair" << endl;
            nPaire ++;
        };
    };

    cout << "Il y a " << nPaire << " nombres paires !" << endl;

    return 0;
}`
    },
    {
        td: 3,
        titre: "TD 3 - Exercice 1",
        description: "Cet exercice consiste à calculer la somme des carrés des entiers de 1 à 100.",
        code: `#include <iostream>`,
    }
];
